<template #content>
    near-by
    <div ref="map" class="sm:w-96 w-full h-screen"></div>
    Latitude: {{ lat }}
    Longitude: {{ lng }}
    
</template>

<script>
import { useGeolocation } from '@vueuse/core'

export default {
    data() {
        return {
            coords: {},
            lat: 0.00,
            lng: 0.00
        }
    },
    watch: {
        coords(val) {
            this.lat = val.latitude
            this.lng = val.longitude
            this.map()
        }
    },
    methods: {
        map() {
            const mapSetting = {
                zoom: 10,
                center: {lat: this.lat, lng: this.lng}
            }
            const map = new google.maps.Map(this.$refs.map, mapSetting)
            const newLocation = {lat: 21.974518, lng: 96.111974}
            new google.maps.Maker({
                position: newLocation,
                map
            })
        },
    },
    mounted() {
        const { coords } = useGeolocation()
        this.coords = coords
        if (coords) {
            this.coords = coords
        } else {
            console.error('Geolocation data not available.');
        }
    }
}
</script>