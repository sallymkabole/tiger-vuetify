<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer theme="dark" :width="92" permanent>


        <v-list density="compact" nav class="d-flex flex-column justify-content-center align-items-center">
          <v-list-item twoline>
            <v-list-item-action @click="setActive('dashboard')" value="dashboard">
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>

              <v-list-item-subtitle>Home</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-action @click="setActive('messages')" value="messages">
              <v-icon> mdi-forum</v-icon>
            </v-list-action>
            <v-list-item-content>
              <v-list-item-subtitle>Chat</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
         <!---- <v-list-item-action>
            <v-avatar src="https://randomuser.me/api/portraits/women/75.jpg"></v-avatar>
          </v-list-item-action>-->

          <v-list-item two-line>

            <v-list-item-action>
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Settings</v-list-item-subtitle>
          </v-list-item-content>
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer v-model="drawer" permanent rail rail-width="190">
        <v-list v-if="active == 'dashboard'">
          <v-list-item :to="{ name: 'home' }" title="Home" value="home">
          </v-list-item>

          <v-list-item :to="{ name: 'contacts' }" title="Contacts" value="contacts">
            <v-list-title class="white--text">cdcd</v-list-title>
          </v-list-item>

          <v-list-item title="Settings" value="settings"></v-list-item>
        </v-list>


        <v-list v-if="active == 'messages'" value="messages">
          <v-list-item title="trial" value="trial"></v-list-item>

          <v-list-item title="then" value="then"></v-list-item>

          <v-list-item title="get out" value="get out"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar density="default">
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
function setActive(current) {
  drawer.value = true
  active.value = current
}


</script>