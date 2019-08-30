export default {
    'id': 'room-extrusion',
    'type': 'fill-extrusion',
    'source': {
        // GeoJSON Data source used in vector tiles, documented at
        // https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
        'type': 'geojson',
        'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson'
    },
    'paint': {
        // See the Mapbox Style Specification for details on data expressions.
        // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions

        // Get the fill-extrusion-color from the source 'color' property.
        // 'fill-extrusion-color': ['get', 'color'],
        'fill-extrusion-color': '#d40000',

        // Get fill-extrusion-height from the source 'height' property.
        'fill-extrusion-height': ['get', 'height'],

        // Get fill-extrusion-base from the source 'base_height' property.
        'fill-extrusion-base': ['get', 'base_height'],

        // Make extrusions slightly opaque for see through indoor walls.
        'fill-extrusion-opacity': 1
    }
}