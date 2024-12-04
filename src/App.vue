<template>
  <v-app>
    <v-app-bar flat class="border-b">
      <v-app-bar-title>Meu APP</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <div class="d-flex justify-space-around">
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
