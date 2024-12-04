<template>
  <v-app>
    <v-app-bar flat class="border-b">
      <v-app-bar-title>Meu APP</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <h1>Dashboard</h1>

        <v-row>
          <v-col class="text-center" cols="12" md="4" lg="3">
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
</script>
