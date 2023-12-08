export const useTeamStore = defineStore({
    id: "team-store",
    state: () => {
        return {
            members: [
                {
                    id:1,
                    name: "Amine",
                    linkedin: "https://www.linkedin.com/in/aminekharrat/",
                    github: "https://github.com/AmineKharrat",
                    image: "/pages/team/amine.jpg",
                    title: "CEO"
                },
                {
                    id:2,
                    name: "Karim",
                    linkedin: "https://www.linkedin.com/in/karim-siala/",
                    github: "https://github.com/karimsiala",
                    image: "/pages/team/karim.jpg",
                    title: "Nerd"
                },
                {
                    id:3,
                    name: "Hazar",
                    linkedin: "https://www.linkedin.com/in/hazar-karadag/",
                    github: "https://github.com/parhasard",
                    image: "/pages/team/hazar.jpg",
                    title: "Queen"
                },
                {
                    id:4,
                    name: "Luca",
                    linkedin: "https://www.linkedin.com/in/luca-sophie-lamerichs-131104206/",
                    github: "https://github.com/openroboverse",
                    image: "/pages/team/luca.jpg",
                    title: "Luca"
                },
                {
                    id:5,
                    name: "Jan",
                    linkedin: "https://www.linkedin.com/in/janstrehl/",
                    github: "https://github.com/strehljd",
                    image: "/pages/team/jan.jpg",
                    title: "Dev"
                },
                {
                    id:6,
                    name: "Estafania",
                    linkedin: "https://www.linkedin.com/in/estefania-betancourt-9545531a9/",
                    github: "https://github.com/openroboverse",
                    image: "/pages/team/estafania.jpg",
                    title: "Dev"
                },
                {
                    id:7,
                    name: "Thu Ha",
                    linkedin: "https://www.linkedin.com/in/thu-ha-dam-b0a7061b5/",
                    github: "https://github.com/openroboverse",
                    image: "/pages/team/thuha.jpg",
                    title: "Dev"
                },
                {
                    id:8,
                    name: "Marc",
                    linkedin: "https://www.linkedin.com/in/marc-andr%C3%A9-weism%C3%BCller/",
                    github: "https://github.com/openroboverse",
                    image: "/pages/team/marc.jpg",
                    title: "Dev"
                }
            ]
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTeamStore, import.meta.hot))
}