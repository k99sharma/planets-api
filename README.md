# Planets API
### API created for Postman Student Summit Hackathon Project

# Working
### Planets data can be fetched using below endpoint

```javascript
https://www.ghost32-planets-api.herokuapp.com/planets/getPlanet?name={ planet name }
```

## Response Format
```json
{
    "name": "Mercury",
    "textureUrl": "https://www.solarsystemscope.com/textures/download/2k_mercury.jpg",
    "description": "Mercury is the smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. It is the closest planet to the Sun. Mercury is a rocky planet, also known as a terrestrial planet. Mercury has a solid, cratered surface, much like the Earth's moon.",
    "distanceFromSun": "36 million miles",
    "yearLength": "88 Earth Days",
    "numberOfMoons": 0,
    "rings": {
        "exist": false,
        "url": ""
    }
}
```

# Reference
### Planet information is referenced from [https://solarsystem.nasa.gov/planets/overview/](https://solarsystem.nasa.gov/planets/overview/)
### Planet textures are referenced from [https://www.solarsystemscope.com/textures/](https://www.solarsystemscope.com/textures/)
