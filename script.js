const managerForm = {
  inputName: document.getElementById("managerName"),
  inputAge: document.getElementById("managerAge"),
  inputDepartment: document.getElementById("managerDP"),
  registerButton: document.getElementById("registerManager"),

  getValues: function() {
    return {
      name: this.inputName.value,
      age: this.inputAge.value,
      department: this.inputDepartment.value
    };
  },

  clearForm: function() {
    this.inputName.value = "";
    this.inputAge.value = "";
    this.inputDepartment.value = "";
  }
};

const developerForm = {
  inputName: document.getElementById("devName"),
  inputAge: document.getElementById("devAge"),
  inputStack: document.getElementById("devStack"),
  registerButton: document.getElementById("registerDev"),

  getValues: function() {
    return {
      name: this.inputName.value,
      age: this.inputAge.value,
      stack: this.inputStack.value
    };
  },

  clearForm: function() {
    this.inputName.value = "";
    this.inputAge.value = "";
    this.inputStack.value = "";
  }
};

class Funcionario {
  constructor(nome = String, idade = Number, cargo = String) {
    this.nome = nome.toString();
    this.idade = Number(idade);
    this.cargo = cargo.toString();
  }

  seApresentar() {
   return (`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}. Prazer em conhecer!`);
  }

  trabalhar() {
   return (`${this.nome} está trabalhando no momento.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome = String, idade = Number, departamento = String) {
    super(nome, idade, "gerente");
    this.departamento = departamento;
  }

  gerenciar() {
   return (`${this.nome} está desempenhando a função ${this.cargo} de ${this.departamento}.`);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome = String, idade = Number, linguagem = String) {
    super(nome, idade, "desenvolvedor");
    this.linguagem = linguagem;
  }

  programar() {
   return (`${this.nome} está desempenhando a função ${this.cargo} na linguagem ${this.linguagem}.`);
  }
}

// Registro do Gerente
managerForm.registerButton.addEventListener('click', () => {
  try {
    const { name, age, department } = managerForm.getValues();

    if (!name || !age || !department) {
      throw new Error("Todos os campos obrigatórios devem ser preenchidos.");
    }

    const newManager = new Gerente(name, age, department);
    const managerList = JSON.parse(localStorage.getItem('gerentes')) || [];
    managerList.push({...newManager, apresentacao: newManager.seApresentar(), trabalhar: newManager.trabalhar(), gerenciar: newManager.gerenciar()});
    localStorage.setItem('gerentes', JSON.stringify(managerList));

    managerForm.clearForm();
    renderManagerTable();
  } catch (error) {
    alert(error.message);
  }
});

// Registro do Desenvolvedor
developerForm.registerButton.addEventListener('click', () => {
  try {
    const { name, age, stack } = developerForm.getValues();

    if (!name || !age || !stack) {
      throw new Error("Todos os campos obrigatórios devem ser preenchidos.");
    }

    const newDeveloper = new Desenvolvedor(name, age, stack);
    const developerList = JSON.parse(localStorage.getItem('desenvolvedores')) || [];
    developerList.push({...newDeveloper, trabalhar: newDeveloper.trabalhar(), programar: newDeveloper.programar(), apresentacao: newDeveloper.seApresentar()});
    localStorage.setItem('desenvolvedores', JSON.stringify(developerList));

    developerForm.clearForm();
    renderDeveloperTable();
  } catch (error) {
    alert(error.message);
  }
});

// Renderiza a tabela de Gerentes
function renderManagerTable() {
  const gerenteList = JSON.parse(localStorage.getItem('gerentes')) || [];
  const tbody = document.querySelector("#managerTable tbody");
  
  tbody.innerHTML = "";
  
  gerenteList.forEach((gerente) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${gerente.nome}</td>
      <td>${gerente.idade}</td>
      <td>${gerente.departamento}</td>
      <td><button onclick="alert('${gerente.apresentacao}')">Apresentar</button></td>
      <td><button onclick="alert('${gerente.trabalhar}')">Trabalhar</button></td>
      <td><button onclick="alert('${gerente.gerenciar}')">Gerencias</button></td>
    `;
    
    tbody.appendChild(row);
  });
}

// Renderiza a tabela de Desenvolvedores
function renderDeveloperTable() {
  const developerList = JSON.parse(localStorage.getItem('desenvolvedores')) || [];
  const tbody = document.querySelector("#developerTable tbody");
  
  tbody.innerHTML = "";
  
  developerList.forEach((developer) => {
    const row = document.createElement("tr");
    
    row.innerHTML = `
      <td>${developer.nome}</td>
      <td>${developer.idade}</td>
      <td>${developer.linguagem}</td>
      <td><button onclick="alert('${developer.apresentacao}')">Apresentar</button></td>
      <td><button onclick="alert('${developer.trabalhar}')">Trabalhar</button></td>
      <td><button onclick="alert('${developer.programar}')">Programar</button></td>
    `;
    
    tbody.appendChild(row);
  });
}

// Carrega as tabelas ao carregar a página
window.onload = () => {
  renderManagerTable();
  renderDeveloperTable();
};

// Criando instãncias e chamando métodos
const bobGerente = new Gerente("Bob", 28, "projetos");
console.log(bobGerente.seApresentar());
console.log(bobGerente.trabalhar());
console.log(bobGerente.gerenciar());

const bobDev = new Desenvolvedor("Bob", 28, "js");
console.log(bobDev.seApresentar());
console.log(bobDev.trabalhar());
console.log(bobDev.programar());