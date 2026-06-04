// ═══════════════════════════════════════════════
//  SUMIMSA Mail Service
//  API: https://reportingservice.sumimsa.mx/...
// ═══════════════════════════════════════════════

const API_URL = 'https://reportingservice.sumimsa.mx/SuministrosMarinosAPI/SumimsaApp/send_mail'
const API_KEY  = 'NzE5MDYyMDJANzE5MDUyMDJAS1JaUkM='

/**
 * Envía un correo usando la API de SUMIMSA
 * @param {Object} opts
 * @param {string}   opts.to          - Destinatario principal
 * @param {string}   [opts.bcc]       - BCC
 * @param {string}   [opts.cc]        - CC
 * @param {string}   opts.asunto      - Asunto del correo
 * @param {string}   opts.htmlBody    - Contenido HTML del correo
 * @returns {Promise<{ok:boolean, error?:string}>}
 */
export async function sendMail({ to, bcc = '', cc = '', asunto, htmlBody }) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': API_KEY,
      },
      body: JSON.stringify({
        To:           to,
        Bcc:          bcc,
        Cc:           cc,
        Asunto:       asunto,
        ContenidoHtml: htmlBody,
      }),
    })

    if (!response.ok) {
      const txt = await response.text().catch(() => response.statusText)
      return { ok: false, error: `HTTP ${response.status}: ${txt}` }
    }

    return { ok: true }
  } catch (err) {
    return { ok: false, error: err.message || 'Error de red' }
  }
}

// ── Templates HTML ──────────────────────────────

export function templateCV({ nombre, correo, telefono, ciudad, plaza, mensaje, archivo }) {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:4px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">

        <!-- Header -->
        <tr><td style="background:#0d1e4a;padding:28px 32px;">
          <h1 style="margin:0;font-size:22px;color:#fff;text-transform:uppercase;letter-spacing:1px;">
            Nueva Solicitud de Empleo
          </h1>
          <p style="margin:6px 0 0;font-size:12px;color:#009bdb;letter-spacing:2px;text-transform:uppercase;">
            Capital Humano — SUMIMSA
          </p>
        </td></tr>

        <!-- Plaza badge -->
        <tr><td style="background:#009bdb;padding:10px 32px;">
          <p style="margin:0;font-size:11px;color:#fff;letter-spacing:2px;text-transform:uppercase;">
            Plaza solicitada: <strong>${plaza}</strong>
          </p>
        </td></tr>

        <!-- Datos del candidato -->
        <tr><td style="padding:28px 32px;">
          <h2 style="margin:0 0 18px;font-size:15px;color:#0d1e4a;text-transform:uppercase;border-bottom:2px solid #e2e8f0;padding-bottom:10px;">
            Datos del Candidato
          </h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${row('Nombre completo', nombre)}
            ${row('Correo electrónico', `<a href="mailto:${correo}" style="color:#009bdb;">${correo}</a>`)}
            ${row('Teléfono', telefono)}
            ${row('Ciudad / Estado', ciudad)}
          </table>

          ${mensaje ? `
          <h2 style="margin:24px 0 10px;font-size:15px;color:#0d1e4a;text-transform:uppercase;border-bottom:2px solid #e2e8f0;padding-bottom:10px;">
            Mensaje del Candidato
          </h2>
          <p style="margin:0;font-size:14px;color:#475569;line-height:1.7;background:#f8f9fb;padding:16px;border-left:3px solid #009bdb;">
            ${mensaje.replace(/\n/g, '<br/>')}
          </p>` : ''}

          ${archivo ? `
          <h2 style="margin:24px 0 10px;font-size:15px;color:#0d1e4a;text-transform:uppercase;border-bottom:2px solid #e2e8f0;padding-bottom:10px;">
            Curriculum Vitae
          </h2>
          <p style="margin:0;font-size:13px;color:#64748b;background:#fef9ec;padding:12px 16px;border:1px solid #f59e0b;border-radius:3px;">
            📎 Archivo adjunto: <strong style="color:#0d1e4a;">${archivo}</strong>
            <br/><span style="font-size:11px;color:#94a3b8;">Nota: El archivo fue seleccionado por el candidato. Solicítalo directamente si es necesario.</span>
          </p>` : ''}
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f8f9fb;padding:20px 32px;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:11px;color:#94a3b8;text-align:center;">
            Este correo fue generado automáticamente desde <strong>sumimsa.com.mx</strong><br/>
            © ${new Date().getFullYear()} SUMIMSA — Suministros Marinos e Industriales de México S.A. de C.V.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export function templateContacto({ nombre, empresa, correo, telefono, sector, asunto, mensaje }) {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:4px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">

        <!-- Header -->
        <tr><td style="background:#0d1e4a;padding:28px 32px;">
          <h1 style="margin:0;font-size:22px;color:#fff;text-transform:uppercase;letter-spacing:1px;">
            Nuevo Contacto desde la Web
          </h1>
          <p style="margin:6px 0 0;font-size:12px;color:#009bdb;letter-spacing:2px;text-transform:uppercase;">
            Formulario de Contacto — SUMIMSA
          </p>
        </td></tr>

        <!-- Sector badge -->
        ${sector ? `<tr><td style="background:#f47920;padding:10px 32px;">
          <p style="margin:0;font-size:11px;color:#fff;letter-spacing:2px;text-transform:uppercase;">
            Sector: <strong>${sector}</strong>
          </p>
        </td></tr>` : ''}

        <!-- Datos -->
        <tr><td style="padding:28px 32px;">
          <h2 style="margin:0 0 18px;font-size:15px;color:#0d1e4a;text-transform:uppercase;border-bottom:2px solid #e2e8f0;padding-bottom:10px;">
            Datos del Solicitante
          </h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${row('Nombre', nombre)}
            ${row('Empresa', empresa)}
            ${row('Correo', `<a href="mailto:${correo}" style="color:#009bdb;">${correo}</a>`)}
            ${row('Teléfono', telefono)}
            ${asunto ? row('Asunto', asunto) : ''}
          </table>

          ${mensaje ? `
          <h2 style="margin:24px 0 10px;font-size:15px;color:#0d1e4a;text-transform:uppercase;border-bottom:2px solid #e2e8f0;padding-bottom:10px;">
            Mensaje
          </h2>
          <p style="margin:0;font-size:14px;color:#475569;line-height:1.7;background:#f8f9fb;padding:16px;border-left:3px solid #f47920;">
            ${mensaje.replace(/\n/g, '<br/>')}
          </p>` : ''}
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f8f9fb;padding:20px 32px;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:11px;color:#94a3b8;text-align:center;">
            Este correo fue generado automáticamente desde <strong>sumimsa.com.mx</strong><br/>
            © ${new Date().getFullYear()} SUMIMSA — Suministros Marinos e Industriales de México S.A. de C.V.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

// Helper: fila de tabla de datos
function row(label, value) {
  if (!value) return ''
  return `
  <tr>
    <td style="padding:8px 0;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;width:140px;vertical-align:top;">
      ${label}
    </td>
    <td style="padding:8px 0 8px 12px;font-size:14px;color:#0d1e4a;font-weight:600;vertical-align:top;">
      ${value || '—'}
    </td>
  </tr>`
}
