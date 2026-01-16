# Guide de démarrage local

## Étapes pour voir le site en local

### 1. Ouvrir un terminal dans le dossier du projet

```bash
cd /Users/margauxdausque/LP-SPILL
```

### 2. Installer les dépendances

```bash
npm install
```

Cette commande va installer toutes les dépendances nécessaires (Next.js, React, Framer Motion, etc.)

### 3. Lancer le serveur de développement

```bash
npm run dev
```

### 4. Ouvrir dans votre navigateur

Une fois le serveur démarré, vous verrez un message comme :
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
```

Ouvrez votre navigateur et allez sur : **http://localhost:3000**

## Commandes utiles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run start` - Lance le serveur de production (après build)
- `npm run lint` - Vérifie le code pour les erreurs

## Résolution de problèmes

Si vous avez des erreurs lors de l'installation :

1. Vérifiez que vous êtes dans le bon dossier
2. Supprimez `node_modules` et `package-lock.json` puis réessayez :
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

