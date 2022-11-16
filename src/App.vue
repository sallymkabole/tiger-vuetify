<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer theme="dark" rail permanent>
        <v-list-item nav prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"></v-list-item>


        <v-list density="compact" nav>
          <v-list-item @click="setActive('dashboard')" prepend-icon="mdi-view-dashboard" value="dashboard"></v-list-item>
          <v-list-item @click="setActive('messages')"  prepend-icon="mdi-forum" value="messages"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer v-model="drawer" permanent rail rail-width="190">
        <v-list v-if="active == 'dashboard'">
          <v-list-item  :to="{ name: 'home' }" title="Home" value="home">
          </v-list-item>

          <v-list-item :to="{ name: 'contacts' }"  title="Contacts" value="contacts"></v-list-item>

          <v-list-item title="Settings" value="settings"></v-list-item>
        </v-list>


        <v-list v-if="active == 'messages'" value="messages">
          <v-list-item title="trial" value="trial"></v-list-item>

          <v-list-item title="then" value="then"></v-list-item>

          <v-list-item title="get out" value="get out"></v-list-item>
        </v-list>       
      </v-navigation-drawer>
      
      <v-app-bar  density="default">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
      
        <v-app-bar-title>TigerFrontend</v-app-bar-title>
      </v-app-bar>

      <v-main>
        <v-container class="py-8 px-6" fluid>
          <v-row>
            <v-col>
              <RouterView />
            </v-col>
          </v-row>
        </v-container>
      </v-main>

    </v-layout>
  </v-card>
</template>


<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'


const active = ref('dashboard')
const drawer = ref(false)
function setActive (current) {
  drawer.value = true
  active.value = current
}


</script>