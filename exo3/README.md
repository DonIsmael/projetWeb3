Exercice 3 : 

Cet exercice traite une API REST, en utilisant une base de données MongoDB.

[Mise en place du projet](#) :

- Installation de npm typescript: 

  npm install typescript --save-dev 

- Le script npm pour exécuter tsc est défini comme cela: 

 {
  // ..
  "scripts": {
    "tsc": "tsc"
  },
  // ..
}

- Afin d'initialiser les paramètres tsconfig.json : 

  npm run tsc -- --init

- Installer express et aussi @types/express:

 npm install express
 npm install --save-dev eslint @types/express @typescript-eslint/eslint-plugin @typescript-eslint/parser

- Afin de configurer l'Environement de développement: 

npm install --save-dev ts-node-dev

- Installons Mongoose:

npm install mongoose

- Pour finir, afin de start l'app: 

npm run dev


[L'exercice](#) :

Le but de cet exercice sera de creer un backend qui puisse gérer des personnes afin de les ajouter, supprimer, trouver et mettre à jour dans la base de donees.

La base de donees choisi est MongoDB.

- Javascript:

 Dans la partie javascript, l'exercice 3.18 du module 6 s'y trouve. (https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercises-3-15-3-18)

- Typescript: 

En ce qui concerne la partie typescript, nous avons retranscrit l'exercice 3.18 du module 6 en typescript.


