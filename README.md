<h1 align='center'>Planets API</h1>

<p align='center'>
   <a href="https://opensource.org/licenses/MIT">
    <img alt="License" src="https://img.shields.io/github/license/k99sharma/planets-api"/>
  </a>
    
  <a>
    <img alt="tag" src="https://img.shields.io/github/v/tag/k99sharma/planets-api" />
  </a>
</p>

<p align='center'>
  🤩 REST API created for Postman Student Summit Hackathon. You can fetch data about different planets in our Solar System.
</p>

<br />

![Screenshot (33)](https://user-images.githubusercontent.com/54969439/194230959-9e0f64b5-b82f-4368-ab5c-69a8c652b9bb.png)

<br />

## Tech Stacks & Open-source libraries
- [ExpressJs]() and [NodeJs]() is used to created the API.

## Working
### Planets data can be fetched using below endpoint

```javascript
https://planets-17f2.onrender.com/planets/getPlanet?name={ planet name }
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
- Copy postman test script from project folder to postman request test
- Set query string for desired planet
- Send the request to fetch data
- Open `Visualize` tab to visualize data 

## Reference
### Planet information is referenced from [https://solarsystem.nasa.gov/planets/overview/](https://solarsystem.nasa.gov/planets/overview/)
### Planet textures are referenced from [https://www.solarsystemscope.com/textures/](https://www.solarsystemscope.com/textures/)

<br />

## Find this repository userful? :heart:
Star the repository. 🌟
<br>Also, __[Follow me](https://github.com/k99sharma)__ on GitHub for my next creations! 😎

# LICENSE
```xml
Designed and developed by 2021 (Kalash Sharma)

Licensed under the MIT License, (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   https://opensource.org/licenses/MIT

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
