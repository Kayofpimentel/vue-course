<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <div id="code-boxes">
      <section class="half-page container">
        <h2>Cadastro do Usuário</h2>
        <hr />
        <b-form-group label="Nome:">
          <b-form-input
            type="text"
            size="lg"
            v-model="usuario.nome"
            placeholder="Seu nome"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Email:">
          <b-form-input
            type="text"
            size="lg"
            v-model="usuario.email"
            placeholder="Seu email"
          ></b-form-input>
        </b-form-group>
        <b-button @click="salvar" variant="primary"> Salvando </b-button>
        <b-button @click="obterUsuarios" style="background-color: olive">
          Recarregar
        </b-button>
        <div>
          <b-alert
            show
            dismissible
            v-for="(mensagem, id) in mensagens"
            :key="id"
            :variant="mensagem.tipo"
          >
            {{ mensagem.texto }}
          </b-alert>
        </div>
      </section>

      <section class="half-page container">
        <h2>Lista dos Usuários</h2>
        <hr />
        <b-list-group label="Nome:">
          <b-list-group-item
            v-for="(usuario, id) in usuarios"
            :key="usuario.id"
          >
            <div>
              {{ usuario.id }} => {{ usuario.nome }} => {{ usuario.email }}
            </div>
            <b-button style="background-color: #666600" @click="editar(id)"
              >Editar</b-button
            >
            <b-button variant="danger" @click="excluir(usuario.id)"
              >Excluir</b-button
            >
          </b-list-group-item>
        </b-list-group>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created() {
    const vm = this;
    vm.obterUsuarios();
  },
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        id: "",
      },
      usuarios: [],
      mensagens: [],
      criando: true,
    };
  },
  computed: {},
  methods: {
    salvar() {
      const vm = this;
      const newRequest = !vm.usuario.id
        ? { method: vm.$http.post, item: "usuarios.json" }
        : { method: vm.$http.patch, item: `/usuarios/${vm.usuario.id}.json` };
      newRequest
        .method(newRequest.item, {
          nome: vm.usuario.nome,
          email: vm.usuario.email,
        })
        .then(() => {
          vm.criando = true;
          vm.obterUsuarios();
          vm.gerarMensagem();
        })
        .then(vm.limpar());
    },
    obterUsuarios() {
      const vm = this;
      vm.$http("usuarios.json").then((resp) => {
        vm.usuarios = resp.data;
      });
    },
    editar(usuarioId) {
      const vm = this;
      vm.usuario = { ...vm.usuarios[usuarioId] };
      vm.criando = false;
    },
    excluir(usuarioId) {
      const vm = this;
      vm.$http
        .delete(`/usuarios/${usuarioId}.json`)
        .then(() => {
          vm.obterUsuarios();
          vm.gerarMensagem();
        })
        .catch(() => {
          vm.gerarMensagem("danger");
        })
        .then(vm.limpar());
    },
    limpar() {
      const vm = this;
      vm.usuario.nome = "";
      vm.usuario.email = "";
      vm.usuario.id = "";
      vm.mensagens = [];
    },
    gerarMensagem(tipoNovaMensagem = "success") {
      const vm = this;
      if (tipoNovaMensagem !== "success") {
        vm.mensagens.push({
          texto: "A operação falhou!",
          tipo: tipoNovaMensagem,
        });
      } else {
        vm.mensagens.push({
          texto: "Operação realizada com sucesso!",
          tipo: tipoNovaMensagem,
        });
      }
    },
  },
};
</script>

<style scoped lang='scss'>
#code-boxes {
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  button {
    margin: 0vh 1vw 2vh 1vw;
  }
  .list-group-item {
    button {
      margin-top: 2vh;
    }
  }
}
</style>
