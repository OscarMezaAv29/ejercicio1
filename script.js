      // Datos de Roles.json y Menus.json
      const rolesData = [
        {
          "16139c82-d7d2-47e6-a9c1-9dddf67678f5": {
            "b048848a-39cf-4365-a89d-b60ecbb6d0ff": [
              {
                property: "all",
                bread: "create",
              },
            ],
            "2917147d-575b-4558-aba1-07c439c7426c": [
              {
                property: "area",
                bread: "index",
              },
            ],
            "3740dafd-68af-49bf-b408-f4d89781226e": [
              {
                property: "area",
                bread: "index",
              },
            ],
          },
        },
        {
          "49dcaebf-9672-481e-b2e2-08d5cecd1575": {
            "1595cd96-04af-4a6b-b43e-d397fdb7e4c5": [
              {
                property: "all",
                bread: "create",
              },
            ],
            "bd15d515-f693-4b2f-82c2-c9cb87466c73": [
              {
                property: "all",
                bread: "create",
              },
            ],
            "b048848a-39cf-4365-a89d-b60ecbb6d0ff": [
              {
                property: "all",
                bread: "create",
              },
            ],
            "2917147d-575b-4558-aba1-07c439c7426c": [
              {
                property: "subarea",
                bread: "index",
              },
            ],
            "3740dafd-68af-49bf-b408-f4d89781226e": [
              {
                property: "subarea",
                bread: "index",
              },
            ],
          },
        },
        {
          "f5689393-cfc7-4d85-9fd6-fd96fd7e8eff": {
            "1595cd96-04af-4a6b-b43e-d397fdb7e4c5": [
              {
                property: "all",
                bread: "create",
              },
            ],
            "bd15d515-f693-4b2f-82c2-c9cb87466c73": [
              {
                property: "all",
                bread: "create",
              },
            ],
            "b048848a-39cf-4365-a89d-b60ecbb6d0ff": [
              {
                property: "all",
                bread: "create",
              },
            ],
            "2917147d-575b-4558-aba1-07c439c7426c": [
              {
                property: "all",
                bread: "index",
              },
            ],
            "3740dafd-68af-49bf-b408-f4d89781226e": [
              {
                property: "all",
                bread: "index",
              },
            ],
          },
        },
        {
          "649319bb-5c74-4e2d-b0be-ec0efb206d81": {
            "e76c217f-2207-45a3-baab-09cc382f3e46": [
              {
                property: "area",
                bread: "create",
              },
            ],
            "e76c217f-2207-47a3-baab-09cc3882f3e4": [
              {
                property: "all",
                bread: "show",
              },
            ],
            "e76c217f-2207-45a3-baab-19cc3882f3e4": [
              {
                property: "all",
                bread: "show",
              },
            ],
            "e76c207f-2207-45a3-baab-09cc3882f3e4": [
              {
                property: "all",
                bread: "show",
              },
            ],
          },
        },
      ];

      const menusData = [
        {
          "4c0ea48e-54e4-4c2e-b092-b26a734346a1": {
            name: "ODT Comunicación Institucional",
            submenus: [
              {
                id: "b048848a-39cf-4365-a89d-b60ecbb6d0ff",
                name: "Cobertura fotografica",
                visible: "1",
              },
              {
                id: "1595cd96-04af-4a6b-b43e-d397fdb7e4c5",
                name: "Diseño",
                visible: "1",
              },
              {
                id: "bd15d515-f693-4b2f-82c2-c9cb87466c73",
                name: "Audiovisual",
                visible: "1",
              },
              {
                id: "2917147d-575b-4558-aba1-07c439c7426c",
                name: "Mis ODT",
                visible: "1",
              },
              {
                id: "3740dafd-68af-49bf-b408-f4d89781226e",
                name: "Papelera",
                visible: "1",
              },
            ],
          },
        },
        {
          "1f06438c-451c-45de-bb63-86ef0b4c2283": {
            name: "Reserva de espacios",
            submenus: [
              {
                id: "b048848a-39cf-4365-a89d-b60ecbb6d0ff",
                name: "Cobertura fotografica",
                visible: "1",
              },
              {
                id: "e76c217f-2207-45a3-baab-09cc382f3e46",
                name: "Crear reserva",
                visible: "1",
              },
              {
                id: "e76c217f-2207-47a3-baab-09cc3882f3e4",
                name: "Mensual",
                visible: "1",
              },
              {
                id: "e76c217f-2207-45a3-baab-19cc3882f3e4",
                name: "Semanal",
                visible: "1",
              },
              {
                id: "e76c207f-2207-45a3-baab-09cc3882f3e4",
                name: "Diario",
                visible: "1",
              },
            ],
          },
        },
      ];

      const usuariosData = {
        Mary: [
          "16139c82-d7d2-47e6-a9c1-9dddf67678f5",
          "649319bb-5c74-4e2d-b0be-ec0efb206d81",
        ],
        Adolfo: [
          "649319bb-5c74-4e2d-b0be-ec0efb206d81",
          "f5689393-cfc7-4d85-9fd6-fd96fd7e8eff",
        ],
        Alex: [
          "649319bb-5c74-4e2d-b0be-ec0efb206d81",
          "49dcaebf-9672-481e-b2e2-08d5cecd1575",
        ],
        Ivan: [
          "649319bb-5c74-4e2d-b0be-ec0efb206d81",
          "f5689393-cfc7-4d85-9fd6-fd96fd7e8eff",
        ],
      };

      function imprimirRolesEnTabla(usuario) {
        const identificadores = usuariosData[usuario];

        if (!identificadores) {
          console.error("Usuario no encontrado");
          return;
        }

        const table = document.getElementById("rolesTable");

        const nombresMenuMostrados = new Set();
        const idsUsuarioMostrados = new Set();

        const nombresRolMostrados = new Set();

        const nombresUsuarioMostrados = new Set();

        identificadores.forEach((identificador, index) => {
          const usuarioRoles = rolesData.find(
            (rol) => Object.keys(rol)[0] === identificador
          );

          if (usuarioRoles) {
            let primerFila = true;

            for (const [rolId, permisos] of Object.entries(
              usuarioRoles[identificador]
            )) {
              const submenu = encontrarSubmenu(rolId);
              const nombreMenu = encontrarNombreMenu(rolId);

              const fila = table.insertRow();

              // Mostrar el nombre de usuario solo en la primera fila
              if (primerFila && !nombresUsuarioMostrados.has(usuario)) {
                fila.insertCell(0).textContent = usuario;
                nombresUsuarioMostrados.add(usuario);
              } else {
                fila.insertCell(0).textContent = "";
              }

              // Mostrar el Rol solo si no ha sido mostrado antes (primera fila)
              if (primerFila && !nombresRolMostrados.has(rolId)) {
                fila.insertCell(1).textContent = identificador;
                nombresRolMostrados.add(rolId);
              } else {
                fila.insertCell(1).textContent = "";
              }

              primerFila = false;

              // Mostrar el nombre del menú solo si no ha sido mostrado antes
              if (!nombresMenuMostrados.has(nombreMenu)) {
                fila.insertCell(2).textContent = submenu
                  ? nombreMenu
                  : "No encontrado"; // Nombre Menú
                nombresMenuMostrados.add(nombreMenu);
              } else {
                fila.insertCell(2).textContent = "";
              }

              fila.insertCell(3).textContent = `${
                submenu ? submenu.name : "No encontrado"
              }, ${permisos[0].property}, ${permisos[0].bread}`; 
            }
          } else {
            console.log(
              `${usuario} - No se encontraron roles para identificador ${identificador}`
            );
          }
        });
      }

      // Función para encontrar un submenu por su id
      function encontrarSubmenu(submenuId) {
        return menusData
          .flatMap((menu) => Object.values(menu)[0].submenus)
          .find((submenu) => submenu.id === submenuId);
      }

      // Función para encontrar el nombre del menú por su id
      function encontrarNombreMenu(submenuId) {
        return menusData.flatMap((menu) => {
          const submenu = menu[Object.keys(menu)[0]].submenus.find(
            (sub) => sub.id === submenuId
          );
          return submenu ? [menu[Object.keys(menu)[0]].name] : [];
        })[0];
      }
      imprimirRolesEnTabla("Mary");
      imprimirRolesEnTabla("Adolfo");
      imprimirRolesEnTabla("Alex");
      imprimirRolesEnTabla("Ivan");