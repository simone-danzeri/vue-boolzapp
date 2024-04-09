const { createApp } = Vue;

createApp({
  data() {
    return {
      chatIndex: 0,
      newText: "",
      searchedName: "",
      isVisible: true,
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  methods: {
    changeChat(i) {
      this.chatIndex = i;
    },
    addText(i) {
      this.contacts[i].messages.push({
        date: "",
        message: this.newText,
        status: "sent",
      });
      this.newText = "";
    },
    replyMessage(i) {
      setTimeout(() => {
        this.contacts[i].messages.push({
          date: "",
          message: "Okay",
          status: "received",
        });
      }, 1000);
    },
    searchName() {
      // Devo verificare se il valore di this.searchedName è contenuto dentro le singole stringhe dei nomi
      this.contacts.forEach(eachUser => {
        if(!eachUser.name.toLowerCase().includes(this.searchedName.toLowerCase())) {
          eachUser.visible = false;
        } else {
          eachUser.visible = true;
        }
      });
    },
  },
}).mount("#app");