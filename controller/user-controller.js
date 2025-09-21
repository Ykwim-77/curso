

let ultimoId = 1;

let candidatos = [
    {
        id: ultimoId++,
        nome: "admin",
        rg: "26052024",
        expe_por: "ssp",
        cpf: "10082024",
        data_nasc: "2009-06-01",
        cgm: "123456789",
        rua: "mario de barros",
        numero_casa: 409,
        bairro: "centro sul",
        cidade: "dois vizinhos",
        uf: "PR",
        tel_fixo: "46999414639",
        celular_a: "46999394146",
        celular_b: "46999463941",
        email: "admin@gmail.com",
        curso: "TDS",
        beneficiario: "T",
        nis: "12345678900",
        valor_beneficiario: 10,
        origem_escolar: "Rede Pública / Bolsista integral",
        valor_origem: 85,
        portugues_6ano: 80,
        portugues_7ano: 85,
        portugues_8ano: 78,
        portugues_9ano: 90,
        matematica_6ano: 70,
        matematica_7ano: 75,
        matematica_8ano: 72,
        matematica_9ano: 88,
        media_9ano: 82,
        media_final_disciplinas: 82,
        pontuacao_benef_origem: 95,
        entrevista: 88,
        turno: "manha",
        total_geral: 265,
        nome_funcionario:""
     }
    // {
    //     id: ultimoId++,
    //     nome: "Mariana Silva",
    //     rg: "15032023",
    //     expe_por: "ssp",
    //     cpf: "23041999",
    //     data_nasc: "2009-03-12",
    //     rua: "rua das flores",
    //     numero_casa: 123,
    //     bairro: "jardim primavera",
    //     cidade: "dois vizinhos",
    //     uf: "PR",
    //     tel_fixo: "46999123456",
    //     celular_a: "46999876543",
    //     celular_b: "46999765432",
    //     email: "mariana@gmail.com",
    //     curso: "TDS",
    //     beneficiario: "F",
    //     nis: "",
    //     valor_beneficiario: 0,
    //     origem_escolar: "Rede Pública / Bolsista parcial",
    //     valor_origem: 70,
    //     portugues_6ano: 82,
    //     portugues_7ano: 80,
    //     portugues_8ano: 85,
    //     portugues_9ano: 87,
    //     matematica_6ano: 75,
    //     matematica_7ano: 78,
    //     matematica_8ano: 80,
    //     matematica_9ano: 85,
    //     media_9ano: 86,
    //     media_final_disciplinas: 83,
    //     pontuacao_benef_origem: 80,
    //     entrevista: 90,
    //     turno: "manha",
    //     total_geral: 256,
    //     nome_funcionario:""
    // },
    // {
    //     id: ultimoId++,
    //     nome: "Lucas Pereira",
    //     rg: "28062022",
    //     expe_por: "ssp",
    //     cpf: "12072000",
    //     data_nasc: "2009-07-20",
    //     rua: "avenida brasil",
    //     numero_casa: 456,
    //     bairro: "vila nova",
    //     cidade: "dois vizinhos",
    //     uf: "PR",
    //     tel_fixo: "46999234567",
    //     celular_a: "46999345678",
    //     celular_b: "46999456789",
    //     email: "lucas@gmail.com",
    //     curso: "TDS",
    //     beneficiario: "T",
    //     nis: "98765432100",
    //     valor_beneficiario: 15,
    //     origem_escolar: "Rede Pública / Bolsista integral",
    //     valor_origem: 90,
    //     portugues_6ano: 85,
    //     portugues_7ano: 87,
    //     portugues_8ano: 90,
    //     portugues_9ano: 92,
    //     matematica_6ano: 80,
    //     matematica_7ano: 82,
    //     matematica_8ano: 85,
    //     matematica_9ano: 88,
    //     media_9ano: 90,
    //     media_final_disciplinas: 86,
    //     pontuacao_benef_origem: 95,
    //     entrevista: 92,
    //     turno: "manha",
    //     total_geral: 273,
    //     nome_funcionario:""
    // },
    // {
    //     id: ultimoId++,
    //     nome: "Ana Beatriz",
    //     rg: "01112021",
    //     expe_por: "ssp",
    //     cpf: "03122001",
    //     data_nasc: "2009-11-05",
    //     rua: "rua sao jose",
    //     numero_casa: 789,
    //     bairro: "bairro alto",
    //     cidade: "dois vizinhos",
    //     uf: "PR",
    //     tel_fixo: "46999567890",
    //     celular_a: "46999678901",
    //     celular_b: "46999789012",
    //     email: "ana@gmail.com",
    //     curso: "TDS",
    //     beneficiario: "F",
    //     nis: "",
    //     valor_beneficiario: 0,
    //     origem_escolar: "Rede Privada",
    //     valor_origem: 60,
    //     portugues_6ano: 88,
    //     portugues_7ano: 90,
    //     portugues_8ano: 85,
    //     portugues_9ano: 89,
    //     matematica_6ano: 82,
    //     matematica_7ano: 85,
    //     matematica_8ano: 80,
    //     matematica_9ano: 87,
    //     media_9ano: 88,
    //     media_final_disciplinas: 85,
    //     pontuacao_benef_origem: 75,
    //     entrevista: 91,
    //     turno: "manha",
    //     total_geral: 254,
    //     nome_funcionario:""
    // }
];


async function ListarCandidatos(req, res) {
  const limit = parseInt(req.query.limit) || candidatos.length;
  res.status(200).json(candidatos.slice(0, limit));
}

async function PegarCandidato(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ mensagem: "o id precisa ser um número inteiro" });
  }
  const candidato = candidatos.find(u => u.id === id);
  if (!candidato) {
    return res.status(404).json({ mensagem: "candidato não encontrado" });
  }
  return res.status(200).json(candidato);
}


async function CriarCandidato(req, res) {
  const {
    nome, rg, expe_por, cpf, cgm, data_nasc, rua, numero_casa, bairro, cidade, uf,
    tel_fixo, celular_a, celular_b, email, curso, turno, beneficiario, nis, valor_beneficiario,
    origem_escolar, valor_origem, portugues_6ano, portugues_7ano, portugues_8ano, portugues_9ano,
    matematica_6ano, matematica_7ano, matematica_8ano, matematica_9ano, media_9ano,
    media_final_disciplinas, pontuacao_benef_origem, entrevista, total_geral, nome_funcionario
  } = req.body;


  if (!nome || !rg || !expe_por || !cpf || !data_nasc || !rua || !numero_casa || !bairro || !cidade || !uf || !email || !curso) {
    return res.status(400).json({ mensagem: "Todos os campos obrigatórios precisam ser preenchidos" });
  }

  const email_valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email_valido.test(email)) {
    return res.status(400).json({ mensagem: "Email inválido!!" });
  }

  ultimoId++;
  const novoUsuario = {
    id: ultimoId, nome, rg, expe_por, cpf, cgm, data_nasc, rua, numero_casa, bairro, cidade, uf,
    tel_fixo, celular_a, celular_b, email, curso, turno,
    beneficiario, nis, valor_beneficiario,
    origem_escolar, valor_origem,
    portugues_6ano, portugues_7ano, portugues_8ano, portugues_9ano,
    matematica_6ano, matematica_7ano, matematica_8ano, matematica_9ano,
    media_9ano, media_final_disciplinas,
    pontuacao_benef_origem, entrevista, total_geral, nome_funcionario
  };

  candidatos.push(novoUsuario);
  return res.status(201).json({ mensagem: "Candidato criado" });
}


async function AtualizarCandidato(req, res) {
  const { id } = req.params;
  const idnumero = parseInt(id);
  if (isNaN(idnumero)) {
    return res.status(400).json({ mensagem: "o id precisa ser um número inteiro" });
  }

  const usuario = candidatos.find(u => u.id === idnumero);
  if (!usuario) {
    return res.status(404).json({ mensagem: "Candidato não encontrado" });
  }


  Object.assign(usuario, req.body);

  return res.json({ mensagem: `Candidato ${usuario.nome} (id ${usuario.id}) atualizado`, usuario });
}
async function EnviarEmail(req,res){
  const { para, assunto, mensagem } = req.body;

  try {
    // configura o transporte (use app password se for Gmail)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "seuemail@gmail.com",
        pass: "sua_senha_app" // senha de app, não a senha da conta!
      },
    });

    await transporter.sendMail({
      from: "seuemail@gmail.com",
      to: para,
      subject: assunto,
      text: mensagem,
    });

    res.json({ sucesso: true, msg: "E-mail enviado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sucesso: false, msg: "Erro ao enviar e-mail." });
  }
};





export { ListarCandidatos, PegarCandidato, CriarCandidato, AtualizarCandidato, EnviarEmail };
