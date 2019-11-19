# Mise en place StoryBook

Lancer la commande suivante 

```npx -p @storybook/cli sb init --type react```

il faut ensuite configurer storyBook pour lui dire d'aller chercher les story dans le dossier component.

on ouvre donc le fichier ```./storybook/config.js```

et on modifie 

```
configure(require.context('../stories', true, /\.stories\.js$/), module);
```

par

```
configure(require.context('../src/components', true, /\.stories\.js$/), module);
```

les composants dans le dossier ```components``` sont maintenant visible dans notre storybook.

## Travailler avec Styled Components

Nos composant utilisent un ThemeProvider, il faut émuler ce comportement au sein de son storyBook.

pour cela il faut créer un composant perso appelé ```ThemeDecorator```

dans ./storybook créer ```themeDecorator.js```
```
import React from "react"
import { ThemeProvider } from "styled-components"

import theme from '../src/config/theme'

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator
```

on utilisera ce ThemeDecorator dans ```./storybook/config.js```

```
import { configure, addDecorator } from "@storybook/react"
import themeDecorator from "./themeDecorator"

```

on appliquera ensuite notre ```decorator```.

```
addDecorator(themeDecorator);
```

