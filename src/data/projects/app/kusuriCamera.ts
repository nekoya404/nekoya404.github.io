import type { ProjectData } from '../types'
import home from '../../../assets/projects/kusuri-home.png'
import product from '../../../assets/projects/kusuri-product.png'
import notebook from '../../../assets/projects/kusuri-notebook.png'

export const kusuriCamera: ProjectData = {
  title: {
    ko: 'くすりカメラ',
    en: 'Kusuri Camera',
    ja: 'くすりカメラ'
  },
  platform: 'iOS, Android',
  badge: 'Cross-Platform',
  info: {
    ko: '일본의 시판약을 찾아보고 복약 기록을 남길 수 있는 앱입니다. 약 상자의 JAN 바코드나 판매명으로 셀프메디케이션 세제 대상 품목을 검색하고, 처방전·お薬手帳 사진에서 인식한 내용을 확인한 뒤 기록할 수 있도록 만들었습니다.',
    en: 'An app for looking up over-the-counter medicines in Japan and keeping a medication log. Users can search the self-medication tax-deduction catalog by JAN barcode or product name, then review text recognized from a prescription or medication notebook photo before saving it.',
    ja: '日本の市販薬を調べ、服薬記録を残せるアプリです。薬の箱のJANコードや販売名からセルフメディケーション税制対象品目を検索し、処方せん・お薬手帳の写真から読み取った内容を確認してから記録できるようにしました。'
  },
  pictures: [home, product, notebook],
  features: [
    {
      ko: 'JAN 바코드 스캔 및 판매명 검색',
      en: 'JAN barcode scanning and product-name search',
      ja: 'JANコードの読み取りと販売名検索'
    },
    {
      ko: 'SQLite에 저장한 시판약 목록의 오프라인 조회',
      en: 'Offline lookup of the bundled OTC catalog with SQLite',
      ja: 'SQLiteに収録した市販薬カタログのオフライン検索'
    },
    {
      ko: '처방전·お薬手帳 사진의 기기 내 일본어 OCR과 확인 화면',
      en: 'On-device Japanese OCR for prescription and medication notebook photos, with a review step',
      ja: '処方せん・お薬手帳の写真を端末内で日本語OCRし、保存前に確認'
    },
    {
      ko: '복약 기록과 설정을 기기 내에 저장',
      en: 'On-device storage for medication records and settings',
      ja: '服薬記録と設定を端末内に保存'
    }
  ],
  skills: 'React Native, Expo, TypeScript, Expo Camera, SQLite, Apple Vision, ML Kit',
  status: 'IN_PROGRESS',
  year: '2026~'
}
