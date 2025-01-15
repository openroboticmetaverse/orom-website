import { defineStore, acceptHMRUpdate } from 'pinia';

export const useTeamStore = defineStore({
  id: "team-store",
  state: () => {
    return {
      members: [
        {
          id: 1,
          name: "Amine",
          linkedin: "https://www.linkedin.com/in/aminekharrat/",
          github: "https://github.com/AmineKharrat",
          image: "/openroboverse/team/amine_ea0ijk.jpg",
          title: "Lead",
        },
        {
          id: 2,
          name: "Karim",
          linkedin: "https://www.linkedin.com/in/karim-siala/",
          github: "https://github.com/karimsiala",
          image: "/openroboverse/team/karim_kddxb5.jpg",
          title: "Dev Lead",
        },
        {
          id: 3,
          name: "Jan",
          linkedin: "https://www.linkedin.com/in/janstrehl/",
          github: "https://github.com/strehljd",
          image: "/openroboverse/team/jan_v4l9n0.jpg",
          title: "Ops",
        },
        {
          id: 4,
          name: "Yannick",
          linkedin: "https://www.linkedin.com/in/yannick-pellenz-78207b1b3/",
          github: "https://github.com/YannickP99",
          image: "/openroboverse/team/yannick_sdv3be.jpg",
          title: "Ops",
        },
        {
          id: 5,
          name: "Edilbert",
          linkedin: "https://www.linkedin.com/in/echristhuraj/",
          github: "https://github.com/19ec94",
          image: "/openroboverse/team/edi_jovhhj.jpg",
          title: "dev",
        },
        {
          id: 6,
          name: "Youssef",
          linkedin: "https://www.linkedin.com/in/youssef-aloulou-7b1443162/",
          github: "https://github.com/openroboticmetaverse",
          image: "/openroboverse/team/youssef_myif9n.jpg",
          title: "PM",
        },
        {
          id: 7,
          name: "Yassin",
          linkedin: "https://www.linkedin.com/in/chaaben-yessin-215073221/",
          github: "https://github.com/openroboticmetaverse",
          image: "/openroboverse/team/yassin_estxb6.jpg",
          title: "SimDev",
        },
        {
          id: 8,
          name: "Siddarth",
          linkedin: "https://www.linkedin.com/in/siddarthspillai/",
          github: "https://github.com/siddarth-s-pillai",
          image: "/openroboverse/team/kikbby0numfyxnzghmfe",
          title: "AI",
        },
      ],
      supportersAndAlumni: [
        {
          id: 9,
          name: "Hazar",
          linkedin: "https://www.linkedin.com/in/hazar-ak/",
          github: "https://github.com/openroboticmetaverse",
          image: "/openroboverse/team/hazar_lhll8y.jpg",
          title: "Webdev",
        },
        {
          id: 10,
          name: "Estefania",
          linkedin: "https://www.linkedin.com/in/estefania-cassingena-navone/",
          github: "https://github.com/openroboticmetaverse",
          image: "/openroboverse/team/estafania_rkthuw.jpg",
          title: "Support",
        },
        {
          id: 11,
          name: "Luca",
          linkedin: "https://www.linkedin.com/in/luca-beiser-482399179/",
          github: "https://github.com/openroboticmetaverse",
          image: "/openroboverse/team/luca_spikki.jpg",
          title: "Ops",
        },
        {
          id: 12,
          name: "Thu Ha",
          linkedin: "https://www.linkedin.com/in/thu-ha-dam-b0a7061b5/",
          github: "https://github.com/openroboticmetaverse",
          image: "/openroboverse/team/thuha_berfop.jpg",
          title: "Support",
        },
        {
          id: 13,
          name: "Ala",
          linkedin: "https://www.linkedin.com/in/alakolsi/",
          github: "https://www.linkedin.com/in/alakolsi/",
          image: "/openroboverse/team/ala_nypzgy.jpg",
          title: "Dev"
        },
        {
          id: 14,
          name: "Marc",
          linkedin:
            "https://www.linkedin.com/in/marc-andr%C3%A9-weism%C3%BCller/",
          github: "https://github.com/openroboticmetaverse",
          image: "/openroboverse/team/marc_aj6znt.jpg",
          title: "Support",
        },
        {
          id: 15,
          name: "Zeynel",
          linkedin:
            "https://www.linkedin.com/in/zeynel-kinay-62b214260/",
          github: "https://github.com/openroboticmetaverse",
          image: "/openroboverse/team/zeynel_ypohai_c_crop_ar_1_1_mv3vrk.jpg",
          title: "Dev",
        },
        {
          id: 16,
          name: "Sofien",
          linkedin: "https://www.linkedin.com/in/sofien-sellami/",
          github: "https://github.com/Sofien-Sellami",
          image: "/openroboverse/team/sofien_esg7dx.jpg",
          title: "Webdev",
        },
        {
          id: 17,
          name: "Sandeep",
          linkedin: "https://www.linkedin.com/in/sandys9995/",
          github: "https://github.com/openroboticmetaverse",
          image: "/openroboverse/team/sandy_ftgee2.jpg",
          title: "Dev",
        },
        {
          id: 18,
          name: "Oussama",
          linkedin: "https://www.linkedin.com/in/oussama-bekbichi-ba4773206/",
          github: "https://github.com/openroboticmetaverse",
          image: "/openroboverse/team/oussama_i0vzxw.jpg",
          title: "Dev",
        }
      ],
    };
  },
});

export const useProjectsStore = defineStore({
  id: "projects-store",
  state: () => {
    return {
      projects: [
        {
          id: "1",
          title: "open robotic metaverse (orom)",
          shortDescription: "A collaborative platform connecting open-source robotic projects with real-time simulation and interaction capabilities.",
          image: "/openroboverse/segmentation_full_uw4for.png",
          fullImage: "/openroboverse/photo-2024-02-29-11-13-40_zwgpv9.jpg",
          idea: {
            1: "We are creating a platform that connects open-source robotic projects. The platform is designed to be collaborative, allowing multiple users to work remotely on the same project, ensuring compatibility across various projects built on different technology stacks. Users can seamlessly navigate between projects in an interactive manner.",
            2: "You can think of orom as a place where you can see robots performing various tasks. Instead of just sharing videos of the demos, our vision is to use our platform to directly share a real-time simulation, where users can interact with it and, for example, challenge it by altering the environment.",
            3: "For simulating robotic applications, researchers and developers tend to use different tools such as MuJoCo, ROS, or Drake. Some researchers develop their own simulations for specific needs. The vision of Orom is to enable the visualization of any simulation from any simulator.",
            4: "Our commitment to a browser-based platform is at the heart of our vision for an open, collaborative robotic metaverse. This approach not only ensures universal accessibility but also leverages the widespread availability of web browsers to foster innovation and learning. Within this framework, the selection of Three.js as our visualization engine is crucial. Its advanced rendering capabilities enable us to present complex visualizations with high fidelity, which is essential for a great user experience and particularly vital for sim-to-real applications that rely on computer vision. The recent integration of WebGPU further enhances these visualizations, offering unparalleled performance and efficiency in a web environment. By focusing on browser-based accessibility and leveraging the visualization strengths of Three.js, we prioritize ease of access and the quality of user experience, ensuring that our platform is a versatile and powerful tool for anyone interested in exploring the future of robotics."
          },
          milestones: [
            "Initiate development of the first blocks of the MVP, focusing on robust architecture and core functionalities such as browser-based robot interaction and rendering and backend physics simulation",
            "Enhance simulation capabilities and user interface for an intuitive user experience",
            "Implement initial feedback mechanisms on the platform to collect user input for continuous improvement.",
            "Expand community engagement through regular hackathons and design challenges to test and refine MVP functionalities.",
            "Enhance platform capabilities, focusing on scalability"
          ],
          algorithms: ["3js", "webGPU", "Mujoco", "ROS", "Gazebo"],
          challenges: [
            "To achieve this, we want to solve the following challenges",
            "1. Robotics solutions utilize diverse models.",
            "2. Projects rely on different simulation platforms, each with its unique data types.",
            "3. A unified visualization space for all elements."
          ],
          materials: {
            datasets: {},
            sources: {
              1: {
                title: "orom project description and milestones",
                url: "https://file.notion.so/f/f/f4bfd236-756f-4b5d-b404-7484f3289b4b/366c7f63-d65e-41ea-86a9-62bc0b05077c/Projektbeschreibung.pdf?id=ec7a712a-e270-4db5-ba51-6ae04825a0b2&table=block&spaceId=f4bfd236-756f-4b5d-b404-7484f3289b4b&expirationTimestamp=1714363200000&signature=AI0mcXsqhK8FcrtGuKCqCLqhi-DgFd5wLarD1RzMy-Q&downloadName=Projektbeschreibung.pdf"
              }
            }
          }
        },
        {
          id: "2",
          title: "Home robot",
          shortDescription: "An AI-powered robotic assistant designed to help with daily tasks, focusing on perception, navigation, and manipulation.",
          image: "/openroboverse/bridging_full_middlf.png",
          fullImage: "/openroboverse/Facebook-AI-Habitat-2.0_kkbpfu.jpg",
          idea: {
            1: "A robotic assistant or agent is designed to assist you in various tasks, particularly those that are most bothersome in your daily life. This initiative draws inspiration from the Rearrangement Challenge, as presented by AI2-THOR and AI Habitat. The primary objective of this challenge is to create a model or agent capable of rearranging objects within a room to return them to a predefined initial configuration.",
            2: "The project is devided in three: perception, navigation and manipulation.",
            3: "The perception task involves developing a model capable of utilizing the robot s camera to identify objects and their respective positions. The Manipulation task consists of building a model than successfully grasps an object. For our project we will start with grasping a Mug/Glass"
          },
          milestones: [
            "Get familiar with the datasets",
            "Explore the possibilities to generate more datasets using a 3D environments /Simulation (example: [ProcTHOR](https://procthor.allenai.org/)). change texture(colors), lighting, positions to generate more data",
            "Prepare data for training. We will start with only one object and depending on our progress we can add more and more objects.",
            "Chose an open-source Model)",
            "Train your model, evaluate and iterate",
            "(optional) Test your model with real data"
          ],
          algorithms: ["ManiSkill2", "AI2-THOR", "AI Habitat", "ViT", "SAM (segment anything Model)", "YOLO"],
          challenges: ["Real robotic system needed", "Real parts needed"],
          materials: {
            datasets: {
              1: {
                title: "AI2-THOR",
                url: "https://ai2thor.allenai.org/"
              },
              2: {
                title: "AI Habitat",
                url: "https://aihabitat.org/"
              },
              3: {
                title: "ManiSkill2",
                url: "https://github.com/haosulab/ManiSkill2-docs"
              },
              4: {
                title: "Proctor",
                url: "https://procthor.allenai.org/"
              }
            },
            sources: {
              1: {
                title: "Synthetic Data Generation for Bridging Sim2Real Gap in a Production Environment",
                url: "https://arxiv.org/abs/2311.11039"
              },
              2: {
                title:
                  "Object Detection Using Sim2Real Domain Randomization for Robotic Applications",
                url: "https://arxiv.org/pdf/2208.04171.pdf"
              },
              3: {
                title:
                  "Sim2real Transfer Learning for Point Cloud Segmentation: An Industrial Application Case on Autonomous Disassembly",
                url: "https://openaccess.thecvf.com/content/WACV2023/papers/Wu_Sim2real_Transfer_Learning_for_Point_Cloud_Segmentation_An_Industrial_Application_WACV_2023_paper.pdf"
              }
            }
          }
        },
            {
              id: "3",
              title: "Interactive 3D Web",
              shortDescription: "A web application for creating, viewing, and interacting with 3D models, with a focus on robotic cell design and manipulation.",
              image: "/openroboverse/browser_full_dlo5kv.png",
              fullImage: "/openroboverse/DALL_E_2024-04-28_03.15.51_-_A_realistic_screenshot_of_a_browser_displaying_a_3D_robotic_web_interaction_app._The_robot_shown_is_a_mobile_manipulator_designed_to_look_friendly_an_g3ao7q.webp",
              idea: {
                1: "In today's world, 3D modeling and interaction are becoming super important in a bunch of cool areas. Think about setting up a new factory, developing a robotics solution, designing buildings (Architecture), or even creating video games – they all use 3D models. Our project is about building a web app that lets users play around with 3D models right in their browser. It's like giving them a digital sandbox where they can create, view, and mess with different 3D objects. This isn't just fun; it's a skill that's super useful in many industries.",
                2: "You and your group can chose a use-case that you want to focus on. Proposed would be to work on a tool that makes it possible to design and interact with a robot cell in a 3D world right from your browser!",
                3: "Using Three.js, a powerful library for 3D graphics, we'll create an app where you can pick from a database of standard elements (like parts of a robot or factory equipment) and arrange them in a 3D space. You can tweak how they look by changing their texture and lighting, and even pose them differently. Once our workspace is ready we will give it love by creating a dynamic control where the user can move the robot using a GUI Block in the App."
              },
              milestones: [
                "Get to Know Three.js",
                "Web App Framework",
                "3D Element Database",
                "Interactive 3D World",
                "Customization Features (options to change textures, lighting, and object poses)",
                "Develop a GUI (optional)",
                "User Testing and Feedback",
                "Refinement and Launch"
              ],
              algorithms: ["JavaScript, NodeJS", "three.js", "HTML and CSS basics"],
              challenges: ["Real robotic system needed", "Real parts needed"],
              materials: {
                datasets: {},
                sources: {
                  1: {
                    title: "Three.js examples",
                    url: "https://threejs.org/examples/#webgl_animation_skinning_blending"
                  },
                  2: {
                    title: "MuJoCo",
                url: "https://zalo.github.io/mujoco_wasm/",
              },
              3: {
                title: "Free 3D Materials",
                url: "https://www.blenderkit.com/asset-gallery?query=order%3A-created+category_subtree%3Amaterial+is_free%3Atrue&page=2",
              },
            },
          },
        },
        {
          id: "4",
          title: "Teleoperation",
          shortDescription: "Teleoperate a robot using an Xbox controller",
          fullImage: "v1727989569/openroboverse/teleop1_tjgt0k.jpg",
          image: "v1727989569/openroboverse/teleop1_tjgt0k.jpg",
          idea: {
            1: "Run a Franka robot on ros 2 in a docker container",
            2: "teleoperate the robot using an Xbox controller",
            3: "Visualize the robot in a 3D space using open robotic metaverse"
          },
        
          // Add other necessary fields
        },
        {
          id: "5",
          title: "Mujuco on browser",
          fullImage: "v1727985516/openroboverse/mujuco-demo_x26z0r.png",
          image: "v1727985516/openroboverse/mujuco-demo_x26z0r.png",
          shortDescription: "Vizalize Mujuco apps on the browser",
          idea: {
            1: "Run a Franka robot in our Mujuco container : https://github.com/openroboticmetaverse/mvp_mujoco_simulation",
            2: "Visualize the robot in a 3D space using open robotic metaverse"
          },
          

          // Add other necessary fields
        },
        {
          id: "6",
          title: "Multiplayer experience",
          fullImage: "v1727989835/openroboverse/multiplayer1_rlyx8s.jpg",
          image: "v1727989835/openroboverse/multiplayer1_rlyx8s.jpg",
          shortDescription: "Run two separate ros projects and visualize them in the same 3D space on open robotic metaverse",
          idea: {
            1: "ROS2 and teleoperation running in a docker container: https://github.com/openroboticmetaverse/ros2-tdsi-backend",
            2: "Frontend running in a docker container utilizing our open robotic metaverse app: https://github.com/openroboticmetaverse/mvp-webapp/tree/tdsi",
          },
          // Add other necessary fields
        },
      ],
    };
  },
});

// Move the HMR code outside of the store definitions
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTeamStore, import.meta.hot));
  import.meta.hot.accept(acceptHMRUpdate(useProjectsStore, import.meta.hot));
}
