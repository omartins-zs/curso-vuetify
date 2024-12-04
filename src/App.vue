<template>
  <v-app>
    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home">Home</v-list-item>
        <v-list-item prepend-icon="mdi-account">Usuários</v-list-item>

        <v-list-group value="Clientes">
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-account-circle"
              >Clientes</v-list-item
            >
          </template>

          <v-list-item prepend-icon="mdi-currency-usd">Vendas</v-list-item>
          <v-list-item prepend-icon="mdi-chart-line">Relatório</v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat class="border-b">
      <v-app-bar-nav-icon
        @click="isDrawerOpen = !isDrawerOpen"
      ></v-app-bar-nav-icon>
      <v-app-bar-title>Meu APP</v-app-bar-title>

      <template #append>
        <v-btn icon class="mr-2">
          <v-badge dot color="info">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
        </v-btn>

        <v-menu>
          <template #activator="{ props }">
            <v-avatar v-bind="props">
              <v-img
                cover
                src="https://thumbs.dreamstime.com/z/nerd-portrait-young-cheerful-businessman-smiling-36201399.jpg"
              ></v-img>
            </v-avatar>
          </template>

          <v-card min-width="200px">
            <v-list :lines="false" density="compact" nav>
              <v-list-item prepend-icon="mdi-account-outline">
                <v-list-item-title>Meu perfil</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-heart-outline">
                <v-list-item-title>Favoritos</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-lock-reset">
                <v-list-item-title>Alterar a senha</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <h1 class="mb-6">Dashboard</h1>

        <v-card flat class="border mb-4">
          <div class="d-flex justify-space-between">
            <v-card-title>Últimos usuários</v-card-title>

            <v-card-title>
              <v-btn @click="isDialogOpen = true" variant="tonal" size="small"
                >Adicionar usuário</v-btn
              >

              <v-dialog v-model="isDialogOpen" width="600px">
                <v-card>
                  <v-card-title>Adicionar usuário </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-text-field
                          label="Nome"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          label="Email"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-select
                      label="Cargo"
                      variant="outlined"
                      :items="['Admin', 'Gerente', 'Progamador', 'Coordenador']"
                    >
                    </v-select>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" @click="isDialogOpen = false"
                      >Cancelar</v-btn
                    >
                    <v-btn variant="tonal" color="success">Salvar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-title>
          </div>

          <v-table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Cargo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fulano de Tal</td>
                <td>fulanodetal@gamil.com</td>
                <td>Progamador Pleno</td>
                <td>
                  <v-btn variant="tonal" color="primary">Editar</v-btn>
                </td>
              </tr>
              <tr>
                <td>Cicrano</td>
                <td>cicrano@gmail.com</td>
                <td>Progamador Senior</td>
                <td>
                  <v-btn variant="tonal" color="primary">Editar</v-btn>
                </td>
              </tr>
              <tr>
                <td>Zé Ninguem</td>
                <td>zeninguem@gamil.com</td>
                <td>Progamador Junior</td>
                <td>
                  <v-btn variant="tonal" color="primary">Editar</v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>

        <v-row>
          <v-col class="text-center" cols="12" sm="6" md="4" lg="3">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                src="https://images.pexels.com/photos/13435510/pexels-photo-13435510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              >
                <v-card-title> Top 10 praias na Bahia </v-card-title>
              </v-img>

              <v-card-text>
                <div>Rio vermelho</div>

                <div>Lorem ipsum dolor sit amet.</div>
              </v-card-text>

              <v-card-actions>
                <v-btn prepend-icon="$vuetify" variant="tonal"> Button </v-btn>
                <v-btn color="primary" variant="tonal"> Button </v-btn>
                <v-btn color="warning" text="Ver mais"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="text-center" cols="12" sm="6" md="4" lg="3">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                src="https://images.pexels.com/photos/13435510/pexels-photo-13435510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              >
                <v-card-title> Top 10 praias na Bahia </v-card-title>
              </v-img>

              <v-card-text>
                <div>Rio vermelho</div>

                <div>Lorem ipsum dolor sit amet.</div>
              </v-card-text>

              <v-card-actions>
                <v-btn icon="mdi-home" variant="tonal"></v-btn>
                <v-btn prepend-icon="mdi-cart" variant="tonal">Comprar</v-btn>
                <v-btn color="primary" variant="tonal"> Button </v-btn>
                <v-btn color="warning" variant="tonal" text="">Ver mais</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="text-center" cols="12" sm="6" md="4" lg="3">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                src="https://images.pexels.com/photos/13435510/pexels-photo-13435510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              >
                <v-card-title> Top 10 praias na Bahia </v-card-title>
              </v-img>

              <v-card-text>
                <div>Rio vermelho</div>

                <div>Lorem ipsum dolor sit amet.</div>
              </v-card-text>

              <v-card-actions>
                <v-btn prepend-icon="$vuetify" variant="tonal"> Button </v-btn>
                <v-btn color="primary" variant="tonal"> Button </v-btn>
                <v-btn color="warning" variant="tonal" text="">Ver mais</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col class="text-center" cols="12" sm="6" md="4" lg="3">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                src="https://images.pexels.com/photos/13435510/pexels-photo-13435510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              >
                <v-card-title> Top 10 praias na Bahia </v-card-title>
              </v-img>

              <v-card-text>
                <div>Rio vermelho</div>

                <div>Lorem ipsum dolor sit amet.</div>
              </v-card-text>

              <v-card-actions>
                <v-btn prepend-icon="$vuetify" variant="tonal"> Button </v-btn>
                <v-btn color="primary" variant="tonal"> Button </v-btn>
                <v-btn color="warning" variant="tonal" text="">Ver mais</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- <v-btn class="ma-4" color="purple-darken-3">Submit</v-btn>
        <v-btn class="ma-4" color="#0f0f00">Reset</v-btn>

        <h1
          class="text-blue-lighten-2 bg-blue-darken-4 text-h5 text-lg-h3 px-4 py-2"
        >
          Dashboard
        </h1>

        <h1>Meu App</h1>
        <h1 class="d-none">Meu App Não Mostrado</h1>
        <h1 class="d-none d-md-flex">Meu App Não Mostrado em Tela Pequena</h1>

        <h2 class="text-h2">Meu App</h2>
        <h3 class="text-h6">Meu App</h3>
        <div class="text-subtitle-1">Subtitle-1</div>
        <div class="text-subtitle-2">Subtitle 2</div>

        <div class="text-caption">Caption</div>

        <div class="d-flex flex-column flex-md-row ma-10 justify-space-around">
          <div class="w-100 pa-4 border rounded-lg elevation-3 bg-grey-lighten-2">teste</div>
          <div class="w-100 pa-4 border rounded-lg elevation-3">teste</div>
          <div class="w-100 pa-4 border rounded-lg elevation-3">teste</div>
          <div class="w-100 pa-4 border rounded-lg elevation-3">teste</div>
        </div> -->
      </v-container>

      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
//
import { ref } from "vue";

const isDrawerOpen = ref(false);
const isDialogOpen = ref(false);
</script>
