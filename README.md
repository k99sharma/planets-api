# Planets API
### API created for Postman Student Summit Hackathon Project
Project Video: [Click here](https://www.youtube.com/watch?v=irCxZwBTKlg&t=12s)

### Run 
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/13225438-fc6cdd38-795a-44a4-9db4-43abca2b0372?action=collection%2Ffork&collection-url=entityId%3D13225438-fc6cdd38-795a-44a4-9db4-43abca2b0372%26entityType%3Dcollection%26workspaceId%3D026bbe34-b57f-4e51-b8bd-1d31377e89fe)

# Working
### Planets data can be fetched using below endpoint

```javascript
https://www.ghost32-planets-api.herokuapp.com/planets/getPlanet?name={ planet name }
```

## Response Format
```json
{
  "mars": {
    "name": "Mars",
    "tagline": "Terrestrial Planet",
    "tagline_icon": "https://img.icons8.com/ios/50/ffffff/earth-planet.png",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    "textureUrl":
      "https://www.solarsystemscope.com/textures/download/2k_mars.jpg",
    "description":
      "Mars is a cold desert world. It is half the size of Earth. Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon. There are signs of ancient floods on Mars, but now water mostly exists in icy dirt and thin clouds. On some Martian hillsides, there is evidence of liquid salty water in the ground.",
    "distanceFromSun": "142 million miles",
    "yearLength": "687",
    "numberOfMoons": 2,
    "namesake": "ROMAN GOD OF WAR",
    "rings": {
      "url_exists": false,
    },
    "spaceTexture_url":
      "https://www.solarsystemscope.com/textures/download/2k_stars.jpg",
  }
 }
```
## How to Visualize - Use Postman Desktop Application to visualize
- Go to the provided workspace link: [Link](https://www.postman.com/ghost32/workspace/my-workspace/collection/13225438-fc6cdd38-795a-44a4-9db4-43abca2b0372?ctx=documentation)
- Fork the project
- Open `Get Planet` request
- Set query string for desired planet
- Send the request to fetch data
- Open `Visualize` tab to visualize data 

# Reference
### Planet information is referenced from [https://solarsystem.nasa.gov/planets/overview/](https://solarsystem.nasa.gov/planets/overview/)
### Planet textures are referenced from [https://www.solarsystemscope.com/textures/](https://www.solarsystemscope.com/textures/)
