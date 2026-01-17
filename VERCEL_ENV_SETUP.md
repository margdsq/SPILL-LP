# Configuration des Variables d'Environnement Vercel

Guide spécifique pour configurer `GOOGLE_PRIVATE_KEY` dans Vercel.

## Problème : ERR_OSSL_UNSUPPORTED

Cette erreur signifie que le format de la clé privée est incorrect dans Vercel.

## Solution : Configuration correcte dans Vercel

### Étape 1 : Préparer la clé privée

1. **Ouvrez votre fichier `.env.local`** (ou le JSON du service account)
2. **Copiez la valeur de `GOOGLE_PRIVATE_KEY`** :
   - Dans `.env.local`, c'est tout ce qui est entre les guillemets : `"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"`
   - Dans le JSON, c'est la valeur du champ `private_key`

### Étape 2 : Copier dans Vercel

**Important** : Dans Vercel, vous devez coller la clé **SANS les guillemets externes**, mais **AVEC les `\n`**.

**Format correct pour Vercel** :
```
-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n...\n-----END PRIVATE KEY-----\n
```

**Étapes dans Vercel** :

1. Allez dans votre projet Vercel
2. Cliquez sur **Settings** > **Environment Variables**
3. Cliquez sur **Add New**
4. Nom : `GOOGLE_PRIVATE_KEY`
5. Valeur : **Collez la clé complète** (voir ci-dessous pour les formats)

### Format de la valeur dans Vercel

**Option A : Depuis `.env.local` (recommandé)**

Dans votre `.env.local`, vous avez probablement :
```env
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n"
```

**Pour Vercel**, copiez **tout sauf les guillemets externes** :
- ❌ Ne copiez PAS : `"-----BEGIN...-----\n"`
- ✅ Copiez : `-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n`

**Option B : Depuis le JSON du service account**

Dans le fichier JSON, la clé ressemble à :
```json
{
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n"
}
```

**Pour Vercel**, copiez exactement la valeur du champ `private_key` :
```
-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n
```

### Exemple concret

Si dans `.env.local` vous avez :
```env
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC123456\nABCDEFG789\n-----END PRIVATE KEY-----\n"
```

Dans Vercel, collez **exactement** :
```
-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC123456\nABCDEFG789\n-----END PRIVATE KEY-----\n
```

### Points critiques

1. ✅ **Gardez les `\n`** - Ne les remplacez pas par de vraies nouvelles lignes
2. ✅ **Une seule ligne** - La clé doit être sur une seule ligne dans Vercel
3. ✅ **Sans guillemets externes** - N'ajoutez pas de guillemets dans Vercel
4. ✅ **Complet** - De `-----BEGIN PRIVATE KEY-----` à `-----END PRIVATE KEY-----\n`

### Vérification

Après avoir ajouté la variable :

1. Cliquez sur **Save**
2. **Redeployez** le projet (Settings > Deployments > ... > Redeploy)
3. Testez le formulaire de waitlist

### Si l'erreur persiste

1. **Vérifiez la clé dans Vercel** :
   - Allez dans Settings > Environment Variables
   - Cliquez sur la variable `GOOGLE_PRIVATE_KEY`
   - Vérifiez qu'elle contient `BEGIN PRIVATE KEY` et `END PRIVATE KEY`
   - Vérifiez qu'il y a des `\n` (pas de vraies lignes)

2. **Essayez de supprimer et recréer la variable** :
   - Supprimez `GOOGLE_PRIVATE_KEY`
   - Recréez-la avec le format correct

3. **Vérifiez les autres variables** :
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` doit être l'email complet du service account
   - `GOOGLE_SHEET_ID` doit être l'ID du Google Sheet (extrait de l'URL)

## Commandes pour tester localement

Pour vérifier que votre `.env.local` est correct :

```bash
# Vérifier que la variable est définie
echo $GOOGLE_PRIVATE_KEY | head -c 50

# Vérifier le format
node -e "console.log(process.env.GOOGLE_PRIVATE_KEY?.includes('BEGIN PRIVATE KEY'))"
```

## Support

Si le problème persiste après avoir suivi ces étapes, vérifiez :
- Les logs Vercel (Settings > Logs)
- Que le Google Sheet est partagé avec le service account
- Que les permissions du service account sont correctes
