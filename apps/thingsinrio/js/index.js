var textoMissao = "<p>A triste realidade atual é que muitos governos "+
"tem tido cortes em seus orcamentos para educacão.</p>"+
"<p>Nossa missão é ser um tinder que conecta "+
"educadores em busca de recursos à doadores interessados em "+
"contribuir diretamente com projetos educacionais de uma comunidade "+
"ou em suprir necessidades básicas de estudantes que não têm sido "+
"atendidas pelos meios convencionais.</p>"+
"<p>Nosso objetivo é resgatar o engajamento do cidadão comum "+
"com a escola, lembrando-o que a formacão da sociedade de amanhã "+
"é feita com a educacao da crianca de hoje.</p>"+
"<p>Nossa ambicao é viabilizar nossa missão através do facilitamento "+
"da contribuicão de indivíduos, tanto financeira quanto de servico, "+
"à educadores responsáveis e com idéias claras de como colocar os "+
"recursos recebidos em bom uso, e com a soma de diversas parcerias "+
"individuais construir um futuro melhor.</p>";

var textoEducador = "<p>Querido educador,</p><p>seja bem vindo!</p>"+
"<p>Aqui você poderá <em>criar seu perfil</em> para que doadores o "+
"encontrem e possam contribuir com o seu projeto.</p>"+
"<p>Atualmente o app está em fase de planejamento. A seguir será "+
"iniciada a fase de desenvolvimento, onde você poderá contribuir "+
"com este projeto se envolvendo com a fase beta de lancamento. "+
"Se isso o interessar, por favor entre em contato através do email "+
"nmarquesin@live.com com o título <em>thunder fase beta</em>.</p>"+
"<p>Após criar seu perfil você poderá:</p>"+
"<ul><li>Criar um pedido de ajuda para projeto</li> "+
"<li>Documentar um projeto realizado com a ajuda do thunder no seu "+
"portfolio educador</li><li>Comunicar-se diretamente com doadores interessados "+
"no seu projeto</li><li>Criar pdfs para impressao e divulgacao do "+
"seu projeto na sua comunidade</li><li>Criar banners para serem usados "+
"nas mídias sociais por você e seus alunos, para divulgar seu projeto.</li></ul>";

var textoDoador =  "<p>Querido doador,</p><p>seja bem vindo!</p>"+
"<p>Aqui você poderá encontrar educadores com projetos muito interessantes "+
"e que precisam da sua ajuda, seja em forma de dinheiro ou de seus "+
"talentos e tempo.</p>"+
"<p>Após criar <em>seu perfil no thunder</em> você terá acesso a uma "+
"lista de candidatos que pode ser ordenada por</p>"+
"<ul><li>Regiao Geográfica</li><li>Tipo de projeto</li>"+
"<li>Perfil do educador</li><li>Tipo de contribuicao pedida</li></ul>"+
"<p>da mesma forma que num app de namoro você filtraria por sexo, "+
"idade e região de possíveis parceiros amorosos.</p>"+
"<p>Estamos na torcida para que você se apaixone por um dos projetos "+
"cadastrados e se torne um contribuidor ativo para a melhoria da "+
"educacão de um grupo de criancas sortudas!</p>"+
"<p>Para inspirar a sua busca, dê uma olhada nos seguintes links:</p>"+
"<ul><li><a href="+"http://qedu.org.br/"+" target="+"blank"+
">QEdu</a></li><li><a href="+"http://www.ioeb.org.br/"+" target="+"blank"+">Índice de oportunidades da Educacão Brasileira</a></li></ul>";

var textoApp = "<p>App em construcão</p>";

var textoQuem = "<p>Olá</p><p>Me chamo <a href="+"https://www.linkedin.com/in/nathaliemarquesin/"+" target="+"blank"+">Nathalie</a>.</p><p>Por enquanto "+
"thunder é um projeto pessoal e sou a única envolvida. Se "+
"você gostou da idéia e quer contribuir, entre em contato "+
"comigo pelo email nmarquesin@live.com.</p>";


function missao() {
    document.getElementById("texto").innerHTML = textoMissao;
}

function educador() {
    document.getElementById("texto").innerHTML = textoEducador;
}

function doador() {
    document.getElementById("texto").innerHTML = textoDoador;
}

function app() {
    document.getElementById("texto").innerHTML = textoApp;
}

function quem() {
    document.getElementById("texto").innerHTML = textoQuem;
}

function english() {
    document.getElementById("texto").innerHTML = "Coming soon!";
}
