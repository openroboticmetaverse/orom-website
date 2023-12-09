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
export const useProjectsStore = defineStore({
    id: "projects-store",
    state: () => {
        return {
            projects: [
                {
                    id: "1",
                    title: "Segmentation of Fruits",
                    image: "/pages/projects/segmentation.png",
                    idea: {
                      1:"For automated harvesting of fruits several tasks need to be performed. One is the classification of fruits and the semantic segmentation of the point cloud data for each object instance. For this task different AI models showed good performance. However the vision data is streamed in realtime and the AI image segmentation must also be performed in realtime to enable the automated lag free harvesting of the fruits.",
                      2:"Vision transformers have recently become established for this type of task. This type of segmentation algorithm will therefore be considered in particular.",
                    },
                    milestones: [
                      "Literature Review for datasets and open source AI models",
                      "Selection of model and dataset",
                      "Training of model and benchmark with different hyperparameter",
                      "Programming of evaluation software",
                      "Programming of evaluation software",
                    ],
                    algorithms: ["MASK-RCNN", "DeepLab", "UNet", "Vision transformer (ViT)"],
                    challenges: ["-"],
                    materials: {
                      datasets: {
                        1: {
                          title: "MinneApple - Dataset",
                          url: "https://github.com/nicolaihaeni/MinneApple",
                        },
                        2: {
                          title: "MinneApple - Paper",
                          url: "https://paperswithcode.com/dataset/minneapple",
                        },
                      },
                      sources: {
                        1: {
                          title: "Vision transformer survey",
                          url: "https://arxiv.org/abs/2305.03273",
                        },
                        2: {
                          title: "Overview of segmentation algorithms",
                          url: "https://arxiv.org/abs/2305.03273",
                        },
                        3: {
                          title: "Semantic segmentation models and papers",
                          url: "https://paperswithcode.com/task/semantic-segmentation",
                        },
                        4: {
                          title: "Vision transformer:",
                          url: "https://paperswithcode.com/method/vision-transformer",
                        },
                      },
                    },
                  },
                   {
                    id: "2",
                    title: "Perception of home robot",
                    image: "/pages/projects/bridging.png",
                    idea: {
                      1:"In today's dynamic industrial landscape, where products are increasingly diverse and complex, the need for adaptive robotic sensing is constantly rising.  Leveraging deep learning for image or point cloud segmentation enables complex and adaptive assembly and production. ",
                      2:"However, the challenge lies in acquiring vast amounts of annotated data to train these AI algorithms [2,3]. Traditionally, this has been a resource-intensive endeavour. But here's where the magic begins: the concept of 'sim2real'—bridging the gap between simulation and reality [3]. By generating synthetic data, we can fast-track the training process without relying solely on real-world data.",
                      3:"And that's precisely the focus of our project: pioneering an automated data generation system tailored specifically for the intricate realm of industrial assembly. Join us as we push the boundaries of innovation and redefine the future of robotic perception in industrial settings.",
                    },
                    milestones: [
                      "Training of a state-of-the-art AI algorithm (optional)"
                    ],
                    algorithms: ["domain randomization for objectdetection"],
                    challenges: ["Real robotic system needed", "Real parts needed"],
                    materials: {
                      datasets: {
                
                      },
                      sources: {
                        1: {
                          title: "Synthetic Data Generation for Bridging Sim2Real Gap in a Production Environment",
                          url: "https://arxiv.org/abs/2311.11039",
                        },
                        2: {
                          title: "Object Detection Using Sim2Real Domain Randomization for Robotic Applications",
                          url: "https://arxiv.org/pdf/2208.04171.pdf",
                        },
                        3: {
                          title: "Sim2real Transfer Learning for Point Cloud Segmentation: An Industrial Application Case on Autonomous Disassembly",
                          url: "https://openaccess.thecvf.com/content/WACV2023/papers/Wu_Sim2real_Transfer_Learning_for_Point_Cloud_Segmentation_An_Industrial_Application_WACV_2023_paper.pdf",
                        }
                      },
                    },
                  },
                  {
                    id: "3",
                    title: "Interactive 3D Web Designer",
                    image: "/pages/projects/browser.png",
                    idea: {
                      1: "In today's world, 3D modeling and interaction are becoming super important in a bunch of cool areas. Think about setting up a new factory, developing a robotics solution, designing buildings (Architecture), or even creating video games – they all use 3D models. Our project is about building a web app that lets users play around with 3D models right in their browser. It's like giving them a digital sandbox where they can create, view, and mess with different 3D objects. This isn't just fun; it's a skill that's super useful in many industries. ",
                      2: "You and your group can chose a use-case that you want to focus on. Proposed would be to work on a tool that makes it possible to design and interact with a robot cell in a 3D world right from your browser! ",
                      3: "Using Three.js, a powerful library for 3D graphics, we'll create an app where you can pick from a database of standard elements (like parts of a robot or factory equipment) and arrange them in a 3D space. You can tweak how they look by changing their texture and lighting, and even pose them differently. Once our workspace is ready we will give it love by creating a dynamic control where the user can move the robot using a GUI Block in the App."
                      },
                    milestones: [
                      "Get to Know Three.js", "Web App Framework", "3D Element Database", "Interactive 3D World", "Customization Features (options to change textures, lighting, and object poses)", "Develop a GUI (optional)", "User Testing and Feedback", "Refinement and Launch"
                    ],
                    algorithms: ["JavaScript, NodeJS", "three.js", "HTML and CSS basics"],
                    challenges: ["Real robotic system needed", "Real parts needed"],
                    materials: {
                      datasets: {
                
                      },
                      sources: {
                        1: {
                          title: "Three.js examples",
                          url: "https://threejs.org/examples/#webgl_animation_skinning_blending",
                        },
                        2: {
                          title: "MuJoCo",
                          url: "https://zalo.github.io/mujoco_wasm/",
                        },
                        3: {
                          title: "Free 3D Materials",
                          url: "https://www.blenderkit.com/asset-gallery?query=order%3A-created+category_subtree%3Amaterial+is_free%3Atrue&page=2",
                        }
                      },
                    },
                  },
            ]
        }
    }
})





if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTeamStore, import.meta.hot))
    import.meta.hot.accept(acceptHMRUpdate(useProjectsStore, import.meta.hot))
}