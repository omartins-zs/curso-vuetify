<template>
  <v-app>
    <v-app-bar flat class="border-b">
      <v-app-bar-title>Meu APP</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <h1>Meu App</h1>
        <h2 class="text-h2">Meu App</h2>
        <h3 class="text-h6">Meu App</h3>
        <div class="text-subtitle-1">Subtitle-1</div>
        <div class="text-subtitle-2">Subtitle 2</div>

        <div class="text-caption">Caption</div>

        <div class="d-flex ma-10 justify-space-around">
        <div class="w-25 pa-4 border rounded-lg elevation-3">teste</div>

          <div
            style="width: 100px; height: 100px"
            class="border rounded-lg elevation-3"
          >
            teste
          </div>

          <div
            style="width: 100px; height: 100px"
            class="border rounded-lg elevation-3"
          >
            teste
          </div>
        </div>
      </v-container>

      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>
