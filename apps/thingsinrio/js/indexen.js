var textoMissao = "<p>The current sad reality is that gorverments everywhere "+
"have been cutting their budgets for education.</p>"+
"<p>Our mission is to develop a tinder-like app to connect "+
"teachers searching for resources and contributors willing to pitch in "+
"directly to educational projects created by these teachers and also to connect "+
"schools lacking basic resources for its students to people wanting to make "+
"a difference in children's education.</p>";

var textoEducador = "<p>Dear teacher,</p><p>welcome!</p>"+
"<p>Here you will be able to <em>create your profile</em> so that contributors "+
"find you and get acquainted with your projects.</p>"+
"<p>Our app is currenlty under planning phase. Next will come its "+
"development phase, where you can contribute "+
"with this project by getting involved with its beta launch phase. "+
"If this peaks your interest, please contact me at "+
"nmarquesin@live.com using subject <em>thunder fase beta</em>.</p>"+
"<p>After creating your profile, you will be able to:</p>"+
"<ul><li>Create a help request for a project</li> "+
"<li>Document a project completed with thunder help on your  "+
"project's portfolio</li><li>Comunicate directly with prospective contributors "+
"</li><li>Create pdf files to print and publicize your project in your "+
"community</li><li>Create banners to be used on social media by you and your "+
"students, to advertize your project's request for help.</li></ul>";

var textoDoador =  "<p>Dear contributor,</p><p>welcome!</p>"+
"<p>Here you will be able to find teachers and schools with interesting projects "+
"that could really use your help. Help is accepted in form of cash, goods "+
"or your labour and time.</p>"+
"<p>After you create <em>your thunder profile</em> you will have access to "+
"a list of candidates that can be sorted by </p>"+
"<ul><li>Location</li><li>Project type</li>"+
"<li>Teacher/school profile</li><li>Type of contribution</li></ul>"+
"<p>pretty much the same way you would, in a dating app, filter by gender, "+
"age and region for prospective new romances.</p>"+
"<p>Hopefully you will find a project to fall in love with "+
"and in no time you will be on your way to help a group of lucky children!</p>"+
"<p>To inpire your search, check out the links (Portuguese only):</p>"+
"<ul><li><a href="+"http://qedu.org.br/"+" target="+"blank"+
">QEdu</a></li><li><a href="+"http://www.ioeb.org.br/"+" target="+"blank"+">Índice de oportunidades da Educacão Brasileira</a></li></ul>";

var textoApp = "<p>App under development</p>";

var textoQuem = "<p>Hi</p><p>My name is <a href="+
"https://www.linkedin.com/in/nathaliemarquesin/"+
" target="+"blank"+">Nathalie</a>.</p><p>For now "+
"thunder is a personal project and I am the only one working on it. If "+
"you liked the idea and want to pitch in, please contact me "+
"via email nmarquesin@live.com.</p>";


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
