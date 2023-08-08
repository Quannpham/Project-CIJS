const MockData = [
  {
    id: 1,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/asm-qui-bl.jpg?alt=media&token=d2107e02-2f35-48b0-9eef-7a90591d2b3f",
    name: "Aston Martin",
    size: "small",
    color: "black",
    brand: "Vanquish",
  },
  {
    id: 2,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/asm-qui-gr.jpg?alt=media&token=6c43f2a8-bc1e-41b8-bbe0-42a88441e761",
    name: "Aston Martin",
    size: "medium",
    color: "grey",
    brand: "Vanquish",
  },
  {
    id: 3,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/asm-val-ex.jpg?alt=media&token=de0b90f9-11d5-48a6-8026-7d23f8370ff2",
    name: "Aston Martin",
    size: "large",
    color: "light green",
    brand: "Valkyrie",
  },
  {
    id: 4,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/asm-val-pp.jpg?alt=media&token=524dcb89-5d6c-42ff-bd7c-fbae6e70704b",
    name: "Aston Martin",
    size: "small",
    color: "dark grey",
    brand: "Valkyrie",
  },
  {
    id: 5,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/asm-val-va.jpg?alt=media&token=0da5083d-4601-4365-8462-fb25ad8ce88f",
    name: "Aston Martin",
    size: "medium",
    color: "orange",
    brand: "Valkyrie",
  },
  {
    id: 6,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/asm-van-bl.jpg?alt=media&token=94f90e28-7972-47df-9992-a6129c2901eb",
    name: "Aston Martin",
    size: "large",
    color: "dark black",
    brand: "Vantage",
  },
  {
    id: 7,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/asm-van-gr.jpg?alt=media&token=cb69fc82-5604-4ead-9134-c0665bf19907",
    name: "Aston Martin",
    size: "small",
    color: "dark grey lb",
    brand: "Vantage",
  },
  {
    id: 8,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/asm-van-lb.jpg?alt=media&token=7e73975d-6ac1-4053-9506-431ae6948f77",
    name: "Aston Martin",
    size: "medium",
    color: "dark grey bb",
    brand: "Vantage",
  },
  {
    id: 9,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/asm-vul-bl.jpg?alt=media&token=07840399-ccf2-4e6a-b4a4-1793151c50d3",
    name: "Aston Martin",
    size: "large",
    color: "dark black lc",
    brand: "Vulcan",
  },
  {
    id: 10,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/asm-vul-lb.jpg?alt=media&token=3f053731-534f-4a92-be62-a876d4ab145c",
    name: "Aston Martin",
    size: "small",
    color: "dark light grey",
    brand: "Vulcan",
  },
  {
    id: 11,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/bug-cen-bl.jpg?alt=media&token=1dda7b45-3a88-4608-9af3-907c29f4f31e",
    name: "Aston Martin",
    size: "medium",
    color: "super red",
    brand: "Vulcan",
  },
  {
    id: 12,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/bug-cen-pk.jpg?alt=media&token=668516db-e38f-4452-958a-07f841459832",
    name: "Bugatti",
    size: "large",
    color: "black cat",
    brand: "Centodieci",
  },
  {
    id: 13,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/bug-cen-pk.jpg?alt=media&token=668516db-e38f-4452-958a-07f841459832",
    name: "Bugatti",
    size: "small",
    color: "pink sky",
    brand: "Centodieci",
  },
  {
    id: 14,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/bug-cen-wh.jpg?alt=media&token=95310ec6-5316-4cec-a31e-08e1a5cc57a7",
    name: "Bugatti",
    size: "medium",
    color: "white",
    brand: "Centodieci",
  },
  {
    id: 15,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/bug-div-bl.jpg?alt=media&token=b1428ec8-d484-43b1-a338-bda7d2e0de00",
    name: "Bugatti",
    size: "large",
    color: "black bat",
    brand: "Divo",
  },
  {
    id: 16,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/bug-div-db.jpg?alt=media&token=b48198aa-7484-4d6b-ab3c-d0628f963d0b",
    name: "Bugatti",
    size: "small",
    color: "black cat",
    brand: "Divo",
  },
  {
    id: 17,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/bug-div-hy.jpg?alt=media&token=72ce6d46-3655-4285-9097-6bc893456415",
    name: "Bugatti",
    size: "medium",
    color: "hyper white",
    brand: "Divo",
  },
  {
    id: 18,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/bug-div-ls.jpg?alt=media&token=3f896474-f2ab-4804-b5ad-330a661ee76c",
    name: "Bugatti",
    size: "large",
    color: "Red lipstick",
    brand: "Divo",
  },
  {
    id: 19,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/bug-vey-bl.jpg?alt=media&token=66ee30ea-49ea-4407-a3a6-5558d27a9e22",
    name: "Bugatti",
    size: "small",
    color: "black",
    brand: "Veyron",
  },
  {
    id: 20,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/bug-vey-cr.jpg?alt=media&token=f3269602-a74c-4a27-a431-1e86a9bef3a7",
    name: "Bugatti",
    size: "medium",
    color: "dark green golden ",
    brand: "Veyron",
  },
  {
    id: 21,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/bug-vey-lt.jpg?alt=media&token=4f867e08-8a8e-4ada-96b6-e9690af714d3",
    name: "Bugatti",
    size: "large",
    color: "lightning cycle",
    brand: "Veyron",
  },
  {
    id: 22,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/bug-vey-wh.jpg?alt=media&token=0484e288-4168-4dfb-9673-0121f7dc2ee0",
    name: "Bugatti",
    size: "small",
    color: "white lady",
    brand: "Veyron",
  },
  {
    id: 23,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/fer-la-bl.jpg?alt=media&token=9148915d-50f3-4755-a606-e015b48c294a",
    name: "Ferrari",
    size: "medium",
    color: "black cat",
    brand: "Laferrari",
  },
  {
    id: 24,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/fer-la-mg.jpg?alt=media&token=10a82d30-d4b1-4554-969f-50e16d717c94",
    name: "Ferrari",
    size: "large",
    color: "military green",
    brand: "Laferrari",
  },
  {
    id: 25,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/fer-la-pr.jpg?alt=media&token=7ac39092-5bed-4507-bae1-c51d7e4d67d7",
    name: "Ferrari",
    size: "small",
    color: "purple",
    brand: "Laferrari",
  },
  {
    id: 26,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/fer-la-rd.jpg?alt=media&token=b61f1888-6257-49af-a7f8-f965b3f50d6f",
    name: "Ferrari",
    size: "medium",
    color: "red hat",
    brand: "Laferrari",
  },
  {
    id: 27,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/fer-la-wh.jpg?alt=media&token=5f401bac-135b-44e8-a122-a0b3c1f4483d",
    name: "Ferrari",
    size: "large",
    color: "white cat",
    brand: "Laferrari",
  },
  {
    id: 28,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-aven-bc.jpg?alt=media&token=8a93f753-c0e0-4d04-bf16-5e1e939d185e",
    name: "Lamborghini",
    size: "small",
    color: "black cat",
    brand: "Aventador",
  },
  {
    id: 29,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-aven-gd.jpg?alt=media&token=d36f0171-7f56-456d-bbca-c79ca33242f1",
    name: "Lamborghini",
    size: "medium",
    color: "golden",
    brand: "Aventador",
  },
  {
    id: 30,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-aven-rd.jpg?alt=media&token=9ae7bd98-1c08-49c3-a80b-d998d5756bdf",
    name: "Lamborghini",
    size: "large",
    color: "super red",
    brand: "Aventador",
  },
  {
    id: 31,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-aven-wc.jpg?alt=media&token=6a83adc0-88fa-42cb-a438-dd844a76bab4",
    name: "Lamborghini",
    size: "small",
    color: "white cat",
    brand: "Aventador",
  },
  {
    id: 32,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-aven-wh.jpg?alt=media&token=5bf93125-c1dd-4787-8398-9aad663a140b",
    name: "Lamborghini",
    size: "medium",
    color: "white",
    brand: "Aventador",
  },
  {
    id: 33,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-huracan-bl.jpg?alt=media&token=48286853-227a-48ce-b776-f548516f91ab",
    name: "Lamborghini",
    size: "large",
    color: "black",
    brand: "Huracan",
  },
  {
    id: 34,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-huracan-db.jpg?alt=media&token=b84c8100-25a1-4385-9b34-010ef2777752",
    name: "Lamborghini",
    size: "small",
    color: "dark black",
    brand: "Huracan",
  },
  {
    id: 35,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-huracan-dg.jpg?alt=media&token=8b493b47-2a2f-44ba-9e5e-af1ba087d2c7",
    name: "Lamborghini",
    size: "medium",
    color: "dark green",
    brand: "Huracan",
  },
  {
    id: 36,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-huracan-ev.jpg?alt=media&token=ef1cd244-910f-4d1b-83c3-ee7511edbeba",
    name: "Lamborghini",
    size: "large",
    color: "evospace black",
    brand: "Huracan",
  },
  {
    id: 37,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-huracan-wh.jpg?alt=media&token=e5d61c05-37d6-4b08-8fae-422709490099",
    name: "Lamborghini",
    size: "small",
    color: "white",
    brand: "Huracan",
  },
  {
    id: 38,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-sian-bl.jpg?alt=media&token=1ef898de-6835-430b-b795-cc061a942000",
    name: "Lamborghini",
    size: "medium",
    color: "blue",
    brand: "Sian",
  },
  {
    id: 39,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-sian-dg.jpg?alt=media&token=2acc4dd1-8e58-4e0a-a5f9-f4444379acfc",
    name: "Lamborghini",
    size: "large",
    color: "dark grey",
    brand: "Sian",
  },
  {
    id: 40,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-sian-gr.jpg?alt=media&token=403947da-8e91-4e9c-b237-6e0d8b3bd50f",
    name: "Lamborghini",
    size: "small",
    color: "grey",
    brand: "Sian",
  },
  {
    id: 41,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-sian-rd.jpg?alt=media&token=37136317-2e79-4155-8e95-03c21af34275",
    name: "Lamborghini",
    size: "medium",
    color: "red",
    brand: "Sian",
  },
  {
    id: 42,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-sian-yl.jpg?alt=media&token=d82cf8c2-5adb-4120-9331-03222cfa3eb8",
    name: "Lamborghini",
    size: "large",
    color: "yellow",
    brand: "Sian",
  },
  {
    id: 43,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-veneno-as.jpg?alt=media&token=1b4f3484-c33f-4eff-8430-ff5e93213e69",
    name: "Lamborghini",
    size: "small",
    color: "dark knight",
    brand: "Veneno",
  },
  {
    id: 43,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-veneno-bl.jpg?alt=media&token=fde88aae-1ca5-4c27-90d6-668d51751253",
    name: "Lamborghini",
    size: "medium",
    color: "black",
    brand: "Veneno",
  },
  {
    id: 44,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-veneno-dk.jpg?alt=media&token=76c55f43-1c6a-43fc-9bc7-06bcc24ffc73",
    name: "Lamborghini",
    size: "large",
    color: "black cat",
    brand: "Veneno",
  },
  {
    id: 45,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-veneno-gr.jpg?alt=media&token=3ff654ce-021b-46e5-8bd0-ca71045e41f6",
    name: "Lamborghini",
    size: "small",
    color: "grey",
    brand: "Veneno",
  },
  {
    id: 46,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/lam-veneno-lt.jpg?alt=media&token=2dae31b8-8ad3-4a6f-81dd-63e7fb4f25d7",
    name: "Lamborghini",
    size: "medium",
    color: "lightning cycle",
    brand: "Veneno",
  },
  {
    id: 47,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mcr-600-db.jpg?alt=media&token=d7af4c75-590f-4a9d-b8c7-1d2fb268280f",
    name: "Mclaren",
    size: "large",
    color: "dark black",
    brand: "600",
  },
  {
    id: 48,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mcr-600-lb.jpg?alt=media&token=936f7050-260a-4557-8fda-cb088efab614",
    name: "Mclaren",
    size: "small",
    color: "blue knight",
    brand: "600",
  },
  {
    id: 49,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mcr-600-lg.jpg?alt=media&token=24e20718-6ee2-4150-b27a-f47a9a73efc2",
    name: "Mclaren",
    size: "medium",
    color: "light green",
    brand: "600",
  },
  {
    id: 50,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mcr-600-rd.jpg?alt=media&token=36155608-6a57-45f4-b36d-ed5d4f9ec181",
    name: "Mclaren",
    size: "large",
    color: "red",
    brand: "600",
  },
  {
    id: 51,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mcr-720-bl.jpg?alt=media&token=f12f0cbb-90af-414c-a36b-bec4c3ea59fb",
    name: "Mclaren",
    size: "small",
    color: "black",
    brand: "720",
  },
  {
    id: 52,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mcr-720-rd.jpg?alt=media&token=3086dc9d-2ed7-48ee-b781-e7093951a9b1",
    name: "Mclaren",
    size: "medium",
    color: "red",
    brand: "720",
  },
  {
    id: 53,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mcr-720-wh.jpg?alt=media&token=64acce3c-74eb-4ff1-bbd2-e61d4d1465cc",
    name: "Mclaren",
    size: "large",
    color: "white",
    brand: "720",
  },
  {
    id: 54,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mcr-720-yl.jpg?alt=media&token=556eb921-ec59-4b32-9a02-3c6266d2de9d",
    name: "Mclaren",
    size: "small",
    color: "yellow",
    brand: "720",
  },
  {
    id: 55,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mcr-765-bl.jpg?alt=media&token=81bfe624-c5a8-43bf-a0a7-4fab7f7302a6",
    name: "Mclaren",
    size: "medium",
    color: "blue",
    brand: "765",
  },
  {
    id: 56,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mcr-765-lb.jpg?alt=media&token=6c77e531-6dbb-45a0-991a-54d850861ab2",
    name: "Mclaren",
    size: "large",
    color: "light black",
    brand: "765",
  },
  {
    id: 57,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mcr-765-rd.jpg?alt=media&token=235edf2b-9a1a-400a-8780-63939023f314",
    name: "Mclaren",
    size: "small",
    color: "red",
    brand: "765",
  },
  {
    id: 58,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mer-amg-bl.jpg?alt=media&token=9a9796b5-c4a1-4725-bb84-38a870fc1a61",
    name: "Mercedes",
    size: "medium",
    color: "black",
    brand: "Amg",
  },
  {
    id: 59,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mer-amg-gr.jpg?alt=media&token=84eef39d-2b99-427c-b937-ae368c45a0aa",
    name: "Mercedes",
    size: "large",
    color: "grey",
    brand: "Amg",
  },
  {
    id: 60,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mer-amg-or.jpg?alt=media&token=13d264a5-0f0b-444e-9d9e-dee58866c0d3",
    name: "Mercedes",
    size: "small",
    color: "golden",
    brand: "Amg",
  },
  {
    id: 61,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mer-amg-wh.jpg?alt=media&token=e2a05a64-a1a7-41e1-9721-19e350c9cafd",
    name: "Mercedes",
    size: "medium",
    color: "white",
    brand: "Amg",
  },
  {
    id: 62,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mer-ben-cl.jpg?alt=media&token=3331e3ff-5921-4995-aeef-b3ef18b25913",
    name: "Mercedes",
    size: "large",
    color: "circle light",
    brand: "Benz",
  },
  {
    id: 63,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mer-ben-lc.jpg?alt=media&token=358cf459-afca-4ffd-862e-455f58cdd81d",
    name: "Mercedes",
    size: "small",
    color: "lightning cycle",
    brand: "Benz",
  },
  {
    id: 64,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/mer-ben-ll.jpg?alt=media&token=dd7a7ba5-32c8-4bfd-a73c-35251976ad12",
    name: "Mercedes",
    size: "medium",
    color: "super lightning",
    brand: "Benz",
  },
  {
    id: 65,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/pag-hua-bl.jpg?alt=media&token=48c45264-930b-40dc-b0e2-505b501cba7f",
    name: "Paggani",
    size: "large",
    color: "black",
    brand: "Huayra",
  },
  {
    id: 66,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/pag-hua-di.jpg?alt=media&token=2458db9f-5fb2-410d-9921-024f8e8ad5fd",
    name: "Paggani",
    size: "small",
    color: "golden king",
    brand: "Huayra",
  },
  {
    id: 67,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/pag-hua-gd.jpg?alt=media&token=456f8276-5fb6-4ee8-8c34-f9a5e1f2dab4",
    name: "Paggani",
    size: "medium",
    color: "golden dark",
    brand: "Huayra",
  },
  {
    id: 68,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/pag-hua-lb.jpg?alt=media&token=10af5123-a591-4884-b9f6-5d4c99cfa75d",
    name: "Paggani",
    size: "large",
    color: "light black",
    brand: "Huayra",
  },
  {
    id: 69,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/pag-hua-pp.jpg?alt=media&token=7bf2b97b-4490-45cd-b22d-cdcb71eeed25",
    name: "Paggani",
    size: "small",
    color: "purple",
    brand: "Huayra",
  },
  {
    id: 70,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/pag-hua-tr.jpg?alt=media&token=bf111001-baa9-4264-a8bd-b20186245aae",
    name: "Paggani",
    size: "medium",
    color: "track",
    brand: "Huayra",
  },
  {
    id: 71,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/pag-hua-wh.jpg?alt=media&token=013bf904-0f91-46e0-9fe3-6815d02698da",
    name: "Paggani",
    size: "large",
    color: "white cat",
    brand: "Huayra",
  },
  {
    id: 72,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/por-gt3-md.jpg?alt=media&token=d963abd4-4d77-4e08-b77b-93968ef0e93d",
    name: "Porsche",
    size: "small",
    color: "middle dental",
    brand: "Gt3",
  },
  {
    id: 73,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/por-gt3-or.jpg?alt=media&token=2e7f6010-0339-406f-b58d-89b46794e1f3",
    name: "Porsche",
    size: "medium",
    color: "Golden",
    brand: "Gt3",
  },
  {
    id: 74,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/por-gt3-pp.jpg?alt=media&token=eb7e2930-5d5c-4d8c-aee4-7653a2e3376d",
    name: "Porsche",
    size: "large",
    color: "purple",
    brand: "Gt3",
  },
  {
    id: 75,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/por-gt3-wh.jpg?alt=media&token=df676b15-663e-414d-b345-f2cbe09e14af",
    name: "Porsche",
    size: "small",
    color: "white",
    brand: "Gt3",
  },
  {
    id: 76,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/por-pan-lx.jpg?alt=media&token=ba1f629c-7e45-47e2-ad56-f30c011693ee",
    name: "Porsche",
    size: "medium",
    color: "light xray",
    brand: "Panamera",
  },
  {
    id: 77,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/por-pan-mr.jpg?alt=media&token=329c5bd0-99eb-4640-85a0-febc25a44c66",
    name: "Porsche",
    size: "large",
    color: "mango refa",
    brand: "Panamera",
  },
  {
    id: 78,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/por-pan-tb.jpg?alt=media&token=78947ec9-d581-4ec6-897e-d4aa97d7f4fc",
    name: "Porsche",
    size: "small",
    color: "turquoise",
    brand: "Panamera",
  },
  {
    id: 79,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/por-pan-wh.jpg?alt=media&token=fea22f67-a70b-40e2-8eb5-d432a6c883e8",
    name: "Porsche",
    size: "medium",
    color: "white",
    brand: "Panamera",
  },
  {
    id: 80,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/por-tay-bl.jpg?alt=media&token=adc424d5-baba-4189-bf27-8afc29a5b7cc",
    name: "Porsche",
    size: "large",
    color: "black",
    brand: "Taycan",
  },
  {
    id: 81,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/por-tay-ds.jpg?alt=media&token=1e0b73b1-506d-4347-b70a-51f9a8f42cb1",
    name: "Porsche",
    size: "small",
    color: "dark sky",
    brand: "Taycan",
  },
  {
    id: 82,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/por-tay-wh.jpg?alt=media&token=bdc6a582-02c1-4371-bcdd-89415c4c1994",
    name: "Porsche",
    size: "medium",
    color: "white",
    brand: "Taycan",
  },
  {
    id: 83,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-cul-bl.jpg?alt=media&token=87f7adc6-202d-4ddc-9bf8-01944fd82e62",
    name: "Roll-Royce",
    size: "large",
    color: "black",
    brand: "Asetto",
  },
  {
    id: 84,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-cul-lb.jpg?alt=media&token=a0f0b6e6-1ac8-476e-96b7-35ae8ba82450",
    name: "Roll-Royce",
    size: "small",
    color: "light black",
    brand: "Cullinan",
  },
  {
    id: 85,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-cul-lc.jpg?alt=media&token=68b031be-32b7-4d96-9436-a85557af5723",
    name: "Roll-Royce",
    size: "medium",
    color: "lightning cycle",
    brand: "Cullinan",
  },
  {
    id: 86,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-cul-wh.jpg?alt=media&token=b1eb0ec0-1cb0-43c7-9bb4-1947da100465",
    name: "Roll-Royce",
    size: "large",
    color: "white",
    brand: "Asetto",
  },
  {
    id: 87,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-ghs-bl.jpg?alt=media&token=0e474cc7-c0c4-4637-8bb4-ac69f4527ba5",
    name: "Roll-Royce",
    size: "small",
    color: "black",
    brand: "Ghost",
  },
  {
    id: 88,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-ghs-gr.jpg?alt=media&token=061624d6-9459-4509-ae24-bf894940eb8a",
    name: "Roll-Royce",
    size: "medium",
    color: "grey",
    brand: "Ghost",
  },
  {
    id: 89,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-ghs-lc.jpg?alt=media&token=e111d0e0-1e43-4416-9074-cb97530c5e62",
    name: "Roll-Royce",
    size: "large",
    color: "lightning cycle",
    brand: "Ghost",
  },
  {
    id: 90,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-ghs-wh.jpg?alt=media&token=25ad6139-5069-4ab3-a961-ee01ade2defd",
    name: "Roll-Royce",
    size: "small",
    color: "white",
    brand: "Ghost",
  },
  {
    id: 91,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-ptm-ap.jpg?alt=media&token=f465cb26-d24c-4453-9abb-ea187ccff976",
    name: "Roll-Royce",
    size: "medium",
    color: "Alice King",
    brand: "Phantom",
  },
  {
    id: 92,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-ptm-bl.jpg?alt=media&token=2c1c46da-6510-4232-9d8d-bae7f610ed18",
    name: "Roll-Royce",
    size: "large",
    color: "black",
    brand: "Phantom",
  },
  {
    id: 93,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-ptm-mg.jpg?alt=media&token=fe2d53c2-3720-411a-a60e-d9717ae05b49",
    name: "Roll-Royce",
    size: "small",
    color: "meg griddy",
    brand: "Phantom",
  },
  {
    id: 94,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-wra-bl.jpg?alt=media&token=ec0f39a0-6377-4412-9465-a8d0d4b57008",
    name: "Roll-Royce",
    size: "medium",
    color: "black",
    brand: "Wraith",
  },
  {
    id: 95,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-wra-dr.jpg?alt=media&token=67dc66da-2237-4358-9b70-5b66e5c2bad2",
    name: "Roll-Royce",
    size: "large",
    color: "dark red",
    brand: "Wraith",
  },
  {
    id: 96,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/rol-wra-kr.jpg?alt=media&token=1a652873-043c-4dd8-88a9-117c6a2d8ee3",
    name: "Roll-Royce",
    size: "small",
    color: "knight red",
    brand: "Wraith",
  },
  {
    id: 97,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/zen-ts1-dg.jpg?alt=media&token=8b7f4810-9c37-4811-ab29-29e7ff10b0a1",
    name: "Zenvo",
    size: "medium",
    color: "dark grey",
    brand: "Ts1",
  },
  {
    id: 98,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/zen-ts1-dr.jpg?alt=media&token=f2c24110-3192-4243-8a58-483ac532bfc7",
    name: "Zenvo",
    size: "large",
    color: "dark red",
    brand: "Ts1",
  },
  {
    id: 99,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/zen-ts1-gr.jpg?alt=media&token=798b3c3d-5248-4ca7-89d2-6a977633c979",
    name: "Zenvo",
    size: "small",
    color: "grey",
    brand: "Ts1",
  },
  {
    id: 100,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/zen-ts1-lg.jpg?alt=media&token=2d9cff84-ab4b-4e69-92eb-290aef5a15af",
    name: "Zenvo",
    size: "medium",
    color: "light green",
    brand: "Ts1",
  },
  {
    id: 101,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/zen-ts1-or.jpg?alt=media&token=735238d4-18af-40f3-bc8d-7aba14aab50a",
    name: "Zenvo",
    size: "large",
    color: "orange",
    brand: "Ts1",
  },
  {
    id: 102,
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/project-cijs-85.appspot.com/o/zen-ts1-wh.jpg?alt=media&token=84ee9962-97bc-43f7-9a11-acf665a3f29d",
    name: "Zenvo",
    size: "small",
    color: "white",
    brand: "Ts1",
  },
];

export default MockData;
