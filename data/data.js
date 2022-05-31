const Jadwal = [
    {
        jadwal_id: "001",
        bandara_kode_keberangkatan: "TKG",
        bandara_kode_tujuan: "MLG",
        maskapai_id: "GA",
    },
    {
        jadwal_id: "002",
        bandara_kode_keberangkatan: "TKG",
        bandara_kode_tujuan: "MLG",
        maskapai_id: "SA",
    },
    {
        jadwal_id: "003",
        bandara_kode_keberangkatan: "TKG",
        bandara_kode_tujuan: "MLG",
        maskapai_id: "BA",
    },
    {
        jadwal_id: "004",
        bandara_kode_keberangkatan: "PLM",
        bandara_kode_tujuan: "BDO",
        maskapai_id: "GA",
    },
    {
        jadwal_id: "005",
        bandara_kode_keberangkatan: "PLM",
        bandara_kode_tujuan: "BDO",
        maskapai_id: "BA",
    },
    {
        jadwal_id: "006",
        bandara_kode_keberangkatan: "PLM",
        bandara_kode_tujuan: "BDO",
        maskapai_id: "LA",
    },
    {
        jadwal_id: "007",
        bandara_kode_keberangkatan: "PLM",
        bandara_kode_tujuan: "BDO",
        maskapai_id: "AA",
    },
    {
        jadwal_id: "008",
        bandara_kode_keberangkatan: "PLM",
        bandara_kode_tujuan: "BDO",
        maskapai_id: "CL",
    },
]

const Maskapai = [
    {
        maskapai_id: "GA",
        maskapai_nama: "Garuda Indonesia",
        maskapai_logo: require('../component/images/Garuda.png'),
    },
    {
        maskapai_id: "LA",
        maskapai_nama: "Lion Air",
        maskapai_logo: require('../component/images/Lion.png'),
    },
    {
        maskapai_id: "SA",
        maskapai_nama: "Sriwijaya Air",
        maskapai_logo: require('../component/images/Sriwijaya.png'),
    },
    {
        maskapai_id: "BA",
        maskapai_nama: "Batik Air",
        maskapai_logo: require('../component/images/Batik.png'),
    },
    {
        maskapai_id: "CL",
        maskapai_nama: "Citilink",
        maskapai_logo: require('../component/images/Citilink.png'),
    },
    {
        maskapai_id: "AA",
        maskapai_nama: "Air Asia",
        maskapai_logo: require('../component/images/AirAsia.png'),
    },
]

const Bandara = [
    {
        bandara_kode: "PLM",
        bandara_nama: "S. Mahmud Badaruddin",
    },
    {
        bandara_kode: "BDO",
        bandara_nama: "Husein Sastranegara",
    },
    {
        bandara_kode: "TKG",
        bandara_nama: "Radin Inten",
    },
    {
        bandara_kode: "MLG",
        bandara_nama: "A. Rachman Saleh",
    },
]

export {Maskapai, Bandara, Jadwal}