// ============================================================
//  Base de dados expandida — Luxury Drive Angola Edition
//  OlgaS Drive | 50 marcas e modelos principais
//  Imagens: todas com ?w=800&h=500&fit=crop&crop=center
//  para garantir enquadramento consistente 16:9 / 8:5
// ============================================================

const carrosIniciais = [

    // ════════════════════════════════════════════════════════
    //  BLOCO 1 — DESPORTIVOS & SUPER-CARROS (COMPRAR)
    // ════════════════════════════════════════════════════════
    {
        id: 1,
        nome: "Porsche 911 Turbo S",
        marca: "Porsche",
        tipo: "desportivo",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 180000000,
        img: "https://images.unsplash.com/photo-1679478878852-bb238b7db287?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1679478878852-bb238b7db287?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1722306928515-2dc02298d2bd?w=800&h=500&fit=crop&crop=center",
            "https://plus.unsplash.com/premium_photo-1693879433468-8c0d7be30573?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 650, transmissao: "Automática", lugares: 4, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Branca Jet"
    },
    {
        id: 2,
        nome: "Lamborghini Huracán EVO",
        marca: "Lamborghini",
        tipo: "desportivo",
        negocio: "comprar",
        localizacao: "Miramar",
        preco: 380000000,
        img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 640, transmissao: "Automática", lugares: 2, quilometragem: 0,
        tetoAbrivel: false, tracao4x4: true, ano: 2024, cor: "Amarelo Giallo"
    },
    {
        id: 3,
        nome: "Ferrari F8 Tributo",
        marca: "Ferrari",
        tipo: "desportivo",
        negocio: "comprar",
        localizacao: "Ilha de Luanda",
        preco: 420000000,
        img: "https://images.unsplash.com/photo-1697228076694-0c833af62f09?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1697228076694-0c833af62f09?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1679604421625-131e010794c7?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1633768427737-801467195a53?w=800&h=500&fit=crop&crop=center",
            "https://plus.unsplash.com/premium_photo-1694206014287-19bab1b68dca?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 710, transmissao: "Automática", lugares: 2, quilometragem: 0,
        tetoAbrivel: false, tracao4x4: false, ano: 2023, cor: "Vermelho Rosso Corsa"
    },
    {
        id: 4,
        nome: "BMW M4 Competition",
        marca: "BMW",
        tipo: "desportivo",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 110000000,
        img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 510, transmissao: "Automática", lugares: 4, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: false, ano: 2024, cor: "Azul Brooklyn"
    },
    {
        id: 5,
        nome: "Mercedes-Benz AMG GT 63 S",
        marca: "Mercedes-Benz",
        tipo: "desportivo",
        negocio: "comprar",
        localizacao: "Ingombota",
        preco: 260000000,
        img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 639, transmissao: "Automática", lugares: 4, quilometragem: 3000,
        tetoAbrivel: true, tracao4x4: true, ano: 2023, cor: "Cinzento Selenite"
    },

    // ════════════════════════════════════════════════════════
    //  BLOCO 2 — SUVs DE LUXO (COMPRAR)
    // ════════════════════════════════════════════════════════
    {
        id: 6,
        nome: "Mercedes-Benz G63 AMG Brabus",
        marca: "Mercedes-Benz",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Miramar",
        preco: 290000000,
        img: "https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1648413653819-7c0fd93e8e6a?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 800, transmissao: "Automática", lugares: 5, quilometragem: 1200,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Preto Obsidiana"
    },
    {
        id: 7,
        nome: "Range Rover Vogue Autobiography",
        marca: "Land Rover",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 195000000,
        img: "https://images.unsplash.com/photo-1679506640605-acaa4c7d46ed?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1679506640605-acaa4c7d46ed?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1652741938599-42b4aa7f1259?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1649700912971-1a8be3248b0f?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 530, transmissao: "Automática", lugares: 5, quilometragem: 4500,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Branco Fuji"
    },
    {
        id: 8,
        nome: "Toyota Land Cruiser 300 VXR",
        marca: "Toyota",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Maianga",
        preco: 165000000,
        img: "https://images.unsplash.com/photo-1613859492095-85d9944f09f6?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1613859492095-85d9944f09f6?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1667971289521-4c8050b844a3?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1654688554491-69d21d38fb91?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 415, transmissao: "Automática", lugares: 7, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Branco Pérola"
    },
    {
        id: 9,
        nome: "Porsche Cayenne Turbo GT",
        marca: "Porsche",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 220000000,
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 640, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Cinzento Crayon"
    },
    {
        id: 10,
        nome: "BMW X7 M60i xDrive",
        marca: "BMW",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Miramar",
        preco: 175000000,
        img: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 530, transmissao: "Automática", lugares: 7, quilometragem: 2000,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Azul Mediterrâneo"
    },
    {
        id: 11,
        nome: "Lexus LX 600 Ultra Luxury",
        marca: "Lexus",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 148000000,
        img: "https://images.unsplash.com/photo-1693532331766-bfcec4163ce4?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1693532331766-bfcec4163ce4?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1693532331446-8f77e007ffa6?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1693532332351-78910d75c5a3?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1542754468-350a7ab4d250?w=800&h=500&fit=crop&crop=center"
],
        cavalos: 409, transmissao: "Automática", lugares: 7, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Prata Sonic"
    },
    {
        id: 12,
        nome: "Audi Q8 RS",
        marca: "Audi",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Maianga",
        preco: 168000000,
        img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 600, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Verde Sonoma"
    },
    {
        id: 14,
        nome: "Jeep Wrangler Rubicon 392",
        marca: "Jeep",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 95000000,
        img: "https://images.unsplash.com/photo-1640021042546-2a1b900f324b?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1640021042546-2a1b900f324b?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1619226796274-9f0adda6d5aa?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1677318128345-d615c6808348?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 470, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Verde Gecko"
    },
    {
        id: 15,
        nome: "Maserati Levante Trofeo",
        marca: "Maserati",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Ilha de Luanda",
        preco: 240000000,
        img: "https://images.unsplash.com/photo-1739712695714-98ad81cdd37f?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1739712695714-98ad81cdd37f?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1739712695573-95b3c05f2932?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1768577615307-79d573d01ed9?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 580, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Azul Oceano"
    },

    // ════════════════════════════════════════════════════════
    //  BLOCO 3 — SEDANS & BERLINAS DE LUXO (COMPRAR)
    // ════════════════════════════════════════════════════════
    {
        id: 16,
        nome: "Audi RS6 Avant Performance",
        marca: "Audi",
        tipo: "sedan",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 145000000,
        img: "https://images.unsplash.com/photo-1618056210931-39f730ebbf67?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1618056210931-39f730ebbf67?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1618056255948-815057f89f1b?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1594816115538-0f669a0337d9?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 630, transmissao: "Automática", lugares: 5, quilometragem: 8000,
        tetoAbrivel: true, tracao4x4: true, ano: 2023, cor: "Preto Mythos"
    },
    {
        id: 17,
        nome: "BMW 760i M Sport",
        marca: "BMW",
        tipo: "sedan",
        negocio: "comprar",
        localizacao: "Miramar",
        preco: 185000000,
        img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1601362839562-eac9b79d2e7a?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1601362840138-44bca7a80305?w=800&h=500&fit=crop&crop=center",
            "https://plus.unsplash.com/premium_photo-1693879880434-7de908c30a7b?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 544, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Preto Mineral"
    },
    {
        id: 18,
        nome: "Bentley Flying Spur W12",
        marca: "Bentley",
        tipo: "sedan",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 480000000,
        img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1632245889027-ea2366c44eff?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 626, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Azul Sequin"
    },
    {
        id: 19,
        nome: "Rolls-Royce Ghost Extended",
        marca: "Rolls-Royce",
        tipo: "sedan",
        negocio: "comprar",
        localizacao: "Ilha de Luanda",
        preco: 750000000,
        img: "https://images.unsplash.com/photo-1628901341130-4f2255b326f2?w=800&h=500&fit=crop&crop=center",
            imagens: [
                "https://images.unsplash.com/photo-1628901341130-4f2255b326f2?w=800&h=500&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1776639520963-ba8b7475e9de?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 571, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: false, ano: 2024, cor: "Prata Davos"
    },
    {
        id: 20,
        nome: "Tesla Model S Plaid",
        marca: "Tesla",
        tipo: "sedan",
        negocio: "comprar",
        localizacao: "Ingombota",
        preco: 120000000,
        img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 1020, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Branco Pérola"
    },
    {
        id: 21,
        nome: "Mercedes-Benz S680 Maybach",
        marca: "Mercedes-Benz",
        tipo: "sedan",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 540000000,
        img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 612, transmissao: "Automática", lugares: 4, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: false, ano: 2024, cor: "Bicolor Selenit/Preto"
    },
    {
        id: 22,
        nome: "Volvo S90 Recharge Ultimate",
        marca: "Volvo",
        tipo: "sedan",
        negocio: "comprar",
        localizacao: "Maianga",
        preco: 65000000,
        img: "https://images.unsplash.com/photo-1629896418340-af49773c36c1?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1629896418340-af49773c36c1?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1628569072305-b01a724d06e7?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1628569072305-b01a724d06e7?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1581066057488-90fecfd06b4d?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 455, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Azul Denim"
    },

    // ════════════════════════════════════════════════════════
    //  BLOCO 4 — PICKUPS & COMERCIAIS (COMPRAR)
    // ════════════════════════════════════════════════════════
    {
        id: 23,
        nome: "Ford Raptor F-150 Shelby",
        marca: "Ford",
        tipo: "pickup",
        negocio: "comprar",
        localizacao: "Ingombota",
        preco: 170000000,
        img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 775, transmissao: "Automática", lugares: 5, quilometragem: 1500,
        tetoAbrivel: false, tracao4x4: true, ano: 2024, cor: "Preto Agate"
    },
    {
        id: 24,
        nome: "Toyota Hilux GR-Sport IV",
        marca: "Toyota",
        tipo: "pickup",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 58000000,
        img: "https://images.unsplash.com/photo-1641333326784-24a9c21d3c4e?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1641333326784-24a9c21d3c4e?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1641431616381-3f0613d82ca7?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1641331867919-9b52eff21045?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1681931431021-d3954653f21c?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 224, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: false, tracao4x4: true, ano: 2024, cor: "Branco Ártico"
    },
    {
        id: 25,
        nome: "Chevrolet Silverado ZR2 Bison",
        marca: "Chevrolet",
        tipo: "pickup",
        negocio: "comprar",
        localizacao: "Maianga",
        preco: 88000000,
        img: "https://images.unsplash.com/photo-1597730071805-f87fe40f6796?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1597730071805-f87fe40f6796?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1583707225454-afc0cc77c57d?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1724436281340-2bb2ca3c8317?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 420, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: false, tracao4x4: true, ano: 2024, cor: "Vermelho Mosaic"
    },

    // ════════════════════════════════════════════════════════
    //  BLOCO 5 — ELÉTRICOS & HÍBRIDOS (COMPRAR)
    // ════════════════════════════════════════════════════════
    {
        id: 27,
        nome: "Tesla Model X Plaid",
        marca: "Tesla",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 145000000,
        img: "https://images.unsplash.com/photo-1573700204813-3dfdaecf677c?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1573700204813-3dfdaecf677c?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1732067753776-6614e0821136?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1732067739548-76a5d46baff1?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 1020, transmissao: "Automática", lugares: 7, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Vermelho Multi-Coat"
    },
    {
        id: 28,
        nome: "Audi e-tron GT RS",
        marca: "Audi",
        tipo: "desportivo",
        negocio: "comprar",
        localizacao: "Ilha de Luanda",
        preco: 195000000,
        img: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1618056210931-39f730ebbf67?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1618849985511-7dbc48d7d2e4?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 598, transmissao: "Automática", lugares: 4, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Cinzento Kemora"
    },
    {
        id: 29,
        nome: "Porsche Taycan Turbo Cross Turismo",
        marca: "Porsche",
        tipo: "sedan",
        negocio: "comprar",
        localizacao: "Miramar",
        preco: 230000000,
        img: "https://images.unsplash.com/photo-1763567061050-e9b7cb51eda6?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1763567061050-e9b7cb51eda6?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1746625124974-326e054095f6?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1633080413731-03f16a32cf8f?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1603395792307-8074591b71fc?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 625, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Branco Carrara"
    },
    {
        id: 30,
        nome: "BMW iX M60",
        marca: "BMW",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 158000000,
        img: "https://images.unsplash.com/photo-1764588061773-6200f626c290?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1764588061773-6200f626c290?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1764588070182-8bea428915a5?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1674997254846-f7bdcf075d56?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 619, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Verde Phytonic"
    },

    // ════════════════════════════════════════════════════════
    //  BLOCO 6 — RENT-A-CAR / ALUGUER EXECUTIVO
    // ════════════════════════════════════════════════════════
    {
        id: 33,
        nome: "Executive Chauffeur: Mercedes S-Class",
        marca: "Mercedes-Benz",
        tipo: "sedan",
        negocio: "alugar",
        localizacao: "Ingombota",
        preco: 350000,
        img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 435, transmissao: "Automática", lugares: 5, quilometragem: 31000,
        tetoAbrivel: true, tracao4x4: true, ano: 2023, cor: "Cinzento Selenite"
    },
    {
        id: 34,
        nome: "HCTA Safaris: Lexus LX570",
        marca: "Lexus",
        tipo: "suv",
        negocio: "alugar",
        localizacao: "Talatona",
        preco: 380000,
        img: "https://images.unsplash.com/photo-1603050087224-98d2e1e8930a?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1603050087224-98d2e1e8930a?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1669691101370-9ee9ee0782dc?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1592857723369-03e2e792626d?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1592857723266-667a5b4b63a2?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 362, transmissao: "Automática", lugares: 7, quilometragem: 45000,
        tetoAbrivel: true, tracao4x4: true, ano: 2022, cor: "Prata Sonic"
    },
    {
        id: 35,
        nome: "Prestige Drive: BMW 750i",
        marca: "BMW",
        tipo: "sedan",
        negocio: "alugar",
        localizacao: "Ilha de Luanda",
        preco: 300000,
        img: "https://images.unsplash.com/photo-1664204924910-36e0c2bb5c74?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1664204924910-36e0c2bb5c74?w=800&h=500&fit=crop&crop=center",
            "https://plus.unsplash.com/premium_photo-1677081446847-411399f3f99b?w=800&h=500&fit=crop&crop=center",
            "https://plus.unsplash.com/premium_photo-1750861181382-68e5b1d786b6?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 530, transmissao: "Automática", lugares: 5, quilometragem: 28000,
        tetoAbrivel: true, tracao4x4: true, ano: 2023, cor: "Azul Tanzanite"
    },
    {
        id: 36,
        nome: "Tesla Aluger: Model S Plaid",
        marca: "Tesla",
        tipo: "sedan",
        negocio: "alugar",
        localizacao: "Ingombota",
        preco: 300000,
        img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 1020, transmissao: "Automática", lugares: 5, quilometragem: 5000,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Branco Pérola"
    },
    {
        id: 37,
        nome: "VIP Transfer: Range Rover L",
        marca: "Land Rover",
        tipo: "suv",
        negocio: "alugar",
        localizacao: "Talatona",
        preco: 420000,
        img: "https://images.unsplash.com/photo-1637859460045-ac3ae9ced99d?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1637859460045-ac3ae9ced99d?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1725815761064-b84c3f4f9b94?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1602013871952-8379f19a15f1?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 530, transmissao: "Automática", lugares: 5, quilometragem: 18000,
        tetoAbrivel: true, tracao4x4: true, ano: 2023, cor: "Preto Santorini"
    },
    {
        id: 38,
        nome: "G-Wagon Experience: G500",
        marca: "Mercedes-Benz",
        tipo: "suv",
        negocio: "alugar",
        localizacao: "Miramar",
        preco: 550000,
        img: "https://images.unsplash.com/photo-1601359212423-e8bcc2a36628?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1601359212423-e8bcc2a36628?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1585823370679-0a87dea1514a?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1554049019-cf34d12c7967?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 422, transmissao: "Automática", lugares: 5, quilometragem: 8500,
        tetoAbrivel: true, tracao4x4: true, ano: 2023, cor: "Branco Ártico"
    },

    // ════════════════════════════════════════════════════════
    //  BLOCO 7 — MARCAS ESPECIAIS & EXÓTICOS (COMPRAR)
    // ════════════════════════════════════════════════════════
    {
        id: 39,
        nome: "McLaren 720S Spider",
        marca: "McLaren",
        tipo: "desportivo",
        negocio: "comprar",
        localizacao: "Ilha de Luanda",
        preco: 550000000,
        img: "https://images.unsplash.com/photo-1652449675440-490fa1243cd7?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1652449675440-490fa1243cd7?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1693164493476-11788d527318?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1591076837463-02c62266246e?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 710, transmissao: "Automática", lugares: 2, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: false, ano: 2024, cor: "Azul Papaya"
    },
    {
        id: 40,
        nome: "Lamborghini Urus Performante",
        marca: "Lamborghini",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 360000000,
        img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 666, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Verde Mantis"
    },
    {
        id: 41,
        nome: "Aston Martin DBX707",
        marca: "Aston Martin",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Miramar",
        preco: 320000000,
        img: "https://images.unsplash.com/photo-1664928217987-ea7fcb9d3771?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1664928217987-ea7fcb9d3771?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1664928217807-575ef27f563e?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1664928218074-0d2abfcae6d5?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1664928217880-d17360030adf?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 707, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Cinzento Xenon"
    },
    {
        id: 42,
        nome: "Bugatti Chiron Super Sport",
        marca: "Bugatti",
        tipo: "desportivo",
        negocio: "comprar",
        localizacao: "Ilha de Luanda",
        preco: 5500000000,
        img: "https://plus.unsplash.com/premium_photo-1737559694289-955ffb75cfac?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://plus.unsplash.com/premium_photo-1737559694289-955ffb75cfac?w=800&h=500&fit=crop&crop=center",
            "https://plus.unsplash.com/premium_photo-1737559694304-416b71aa83f0?w=800&h=500&fit=crop&crop=center",
            "https://plus.unsplash.com/premium_photo-1737559694289-955ffb75cfac?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 1600, transmissao: "Automática", lugares: 2, quilometragem: 0,
        tetoAbrivel: false, tracao4x4: true, ano: 2024, cor: "Azul French Racing Blue"
    },
    {
        id: 43,
        nome: "Rolls-Royce Cullinan Black Badge",
        marca: "Rolls-Royce",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 900000000,
        img: "https://images.unsplash.com/photo-1695334702343-877903386dc5?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1695334702343-877903386dc5?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1718564478309-544d89f38a58?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1695334680214-d1a8f3b20f03?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1650740764265-0024905374df?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 591, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Preto Diamond Black"
    },
    {
        id: 44,
        nome: "Bentley Bentayga EWB",
        marca: "Bentley",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Miramar",
        preco: 450000000,
        img: "https://images.unsplash.com/photo-1709245647374-a6ecf222ab8a?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1709245647374-a6ecf222ab8a?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1677793760860-59c15ffb863c?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1729513408065-6563aa84ec9a?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1732226318079-bc3644a272a3?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 542, transmissao: "Automática", lugares: 4, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Verde Viridian"
    },
    {
        id: 45,
        nome: "Ferrari Purosangue",
        marca: "Ferrari",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Ilha de Luanda",
        preco: 650000000,
        img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 715, transmissao: "Automática", lugares: 4, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Vermelho Rosso Fuoco"
    },

    // ════════════════════════════════════════════════════════
    //  BLOCO 8 — COMPACTOS & ACESSO (COMPRAR)
    // ════════════════════════════════════════════════════════
    {
        id: 46,
        nome: "Volkswagen Golf R",
        marca: "Volkswagen",
        tipo: "sedan",
        negocio: "comprar",
        localizacao: "Maianga",
        preco: 32000000,
        img: "https://images.unsplash.com/photo-1724620961935-ee922e2dfad5?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1724620961935-ee922e2dfad5?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1572811298797-9eecadf6cb24?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1634690218629-16ffd0a7ae5d?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 333, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: false, tracao4x4: true, ano: 2024, cor: "Azul Lapiz"
    },
    {
        id: 47,
        nome: "Toyota GR Supra 3.0",
        marca: "Toyota",
        tipo: "desportivo",
        negocio: "comprar",
        localizacao: "Ingombota",
        preco: 68000000,
        img: "https://images.unsplash.com/photo-1643947867681-bd2a3e22eb02?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1643947867681-bd2a3e22eb02?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1642308400105-b03fe22320ab?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1654704092211-dd7c1075d13c?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 387, transmissao: "Automática", lugares: 2, quilometragem: 0,
        tetoAbrivel: false, tracao4x4: false, ano: 2024, cor: "Branco Nitro"
    },
    {
        id: 48,
        nome: "Nissan GT-R Nismo",
        marca: "Nissan",
        tipo: "desportivo",
        negocio: "comprar",
        localizacao: "Talatona",
        preco: 88000000,
        img: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1610205296127-02e7366806e4?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1584273421792-84b448728b38?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 600, transmissao: "Automática", lugares: 4, quilometragem: 0,
        tetoAbrivel: false, tracao4x4: true, ano: 2024, cor: "Cinzento Ultimate"
    },
    {
        id: 49,
        nome: "Hyundai IONIQ 6 Ultimate",
        marca: "Hyundai",
        tipo: "sedan",
        negocio: "comprar",
        localizacao: "Maianga",
        preco: 28000000,
        img: "https://images.unsplash.com/photo-1701921642695-729c4262b060?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1701921642695-729c4262b060?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1665564590635-e5e27629f548?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1647934441921-4ed1e182e4b3?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1645664148883-2cc9832954bb?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 320, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: false, tracao4x4: true, ano: 2024, cor: "Grey Cyber"
    },
    {
        id: 50,
        nome: "Jaguar F-PACE SVR",
        marca: "Jaguar",
        tipo: "suv",
        negocio: "comprar",
        localizacao: "Ilha de Luanda",
        preco: 118000000,
        img: "https://images.unsplash.com/photo-1638144178035-20abf968a80e?w=800&h=500&fit=crop&crop=center",
        imagens: [
            "https://images.unsplash.com/photo-1638144178035-20abf968a80e?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1630045859985-0c577fa864de?w=800&h=500&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1660636706902-5a86aae49a49?w=800&h=500&fit=crop&crop=center"
        ],
        cavalos: 550, transmissao: "Automática", lugares: 5, quilometragem: 0,
        tetoAbrivel: true, tracao4x4: true, ano: 2024, cor: "Cinzento Eiger"
    }
];

// ============================================================
//  INICIALIZAÇÃO — força atualização do LocalStorage
//  Incrementa CACHE_VERSION para forçar novo carregamento
//  quando alterares os dados acima.
// ============================================================
const CACHE_VERSION = "olgas_drive_v3";

if (localStorage.getItem("bancoCarros_version") !== CACHE_VERSION) {
    localStorage.setItem("bancoCarros", JSON.stringify(carrosIniciais));
    localStorage.setItem("bancoCarros_version", CACHE_VERSION);
}

window.bancoCarros = JSON.parse(localStorage.getItem("bancoCarros")) || carrosIniciais;

// ============================================================
//  UTILIDADES — helpers opcionais para o teu código JS
// ============================================================

/** Retorna a URL de imagem com enquadramento correto */
window.getImgUrl = (url) => {
    if (!url) return "";
    if (url.includes("?")) return url.replace(/\?.*$/, "?w=800&h=500&fit=crop&crop=center");
    return `${url}?w=800&h=500&fit=crop&crop=center`;
};

/** Formata preço em Kwanzas (AOA) */
window.formatarPreco = (valor, negocio) => {
    const formatted = new Intl.NumberFormat("pt-AO").format(valor);
    return negocio === "alugar" ? `${formatted} Kz/dia` : `${formatted} Kz`;
};

/** Filtra carros por tipo, negócio ou marca */
window.filtrarCarros = (tipo = null, negocio = null, marca = null) => {
    return window.bancoCarros.filter(c =>
        (!tipo    || c.tipo    === tipo)    &&
        (!negocio || c.negocio === negocio) &&
        (!marca   || c.marca   === marca)
    );
};