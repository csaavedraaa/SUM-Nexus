import LogoTicker from './LogoTicker'

const MARCAS = [
  'american-block', 'derrick', 'gd', 'katch-kan', 'hmh', 'southwest', 'samson', 'wom',
  'snap-on', 'crosby', 'camesa', 'fluke', 'keystone', 'klein-tools', 'milwaukee', 'gearench',
  'jet-lube', 'unitec', 'austromex', 'urrea', 'williams', 'ridgid', 'alkota', 'simplex',
  'enerpac', 'ingersoll-rand', 'midwest-hose', 'gates', 'harrington', 'devilbiss', 'tsubaki', 'starrett',
  'van-houte', 'dunlop', 'oteco', 'acr', 'sherwin-williams', 'dewalt', 'gall-thomson', 'ma-oil',
]

export default function Proveedores({ label }) {
  return <LogoTicker items={MARCAS} basePath="/logos/marcas" label={label} speed={45} />
}
