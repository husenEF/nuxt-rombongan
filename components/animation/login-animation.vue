<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { useMediaQuery, useParallax } from '@vueuse/core'
import { computed, reactive, useTemplateRef } from 'vue'
import { NuxtImg } from '#components'

const target = useTemplateRef<HTMLElement>('target')
const isMobile = useMediaQuery('(max-width: 700px)')

const parallax = reactive(useParallax(target))

const clockStyle = computed(() => ({
    right: 0,
    position: 'absolute',
    transition: '.3s ease-out all',
    top: 0,
    transform: `translateX(${parallax.tilt * 40}px) translateY(${parallax.roll * 40
        }px) scale(1.33)`,
}))
const envelopStyle = computed(() => ({
    left: "25%",
    top: '35%',
    position: 'absolute',
    transition: '.3s ease-out all',
    transform: `translateX(${parallax.tilt * 10}px) translateY(${parallax.roll * 10
        }px) scale(1.33)`,
}))
const targetStyle: CSSProperties = {
    // flexDirection: 'column',
    // justifyContent: 'center',
    transition: '.3s ease-out all',
    overflow: 'hidden',
}
const imageStyle = computed(() => {

    return {
        position: 'absolute',
        transition: '.5s ease-out all',
        top: "50%",
        left: "30%",
        transform: `translateX(${parallax.tilt * -30}px) translateY(${parallax.roll * -10
            }px) scale(1.33)`,
        display: 'flex',
    }
})

const envelopeStyle2 = computed(() => {
    return {
        position: 'absolute',
        transition: '.5s ease-out all',
        left: "45%",
        bottom: 0,
        transform: `translateX(${parallax.tilt * 30}px) translateY(${parallax.roll * -10
            }px) scale(1.33)`,
        display: 'flex',
    }
})

const left0 = computed(()=>({
    position: 'absolute',
    transition: '.5s ease-out all',
    left: '20%',
    top: '20%',
    transform: `translateX(${parallax.tilt * 30}px) translateY(${parallax.roll * -10
        }px) scale(1.33)`,
}))
const left1 = computed(()=>({
    position: 'absolute',
    bottom: 0,
    transform: `translateX(${parallax.tilt * 80}px) translateY(${parallax.roll * -10
    }px) scale(1.33)`,
}))
const left2 = computed(()=>({
    position: 'absolute',   
    top: '60%',
    right: '50%',
    transform: `translateX(${parallax.tilt * 30}px) translateY(${parallax.roll * -10
    }px) scale(1.33)`,
}))

const left3 = computed(()=>({
    position: 'absolute',
    top: 0,
    right: '30%',
    transform: `translateX(${parallax.tilt * 30}px) translateY(${parallax.roll * -10
    }px) scale(1.33)`,
}))

const left4 = computed(()=>({
    position: 'absolute',
    top: '50%',
    left: '20%',
    transform: `translateX(${parallax.tilt * 30}px) translateY(${parallax.roll * -10
    }px) scale(1.33)`,
}))
</script>

<template>
    <div class="left top absolute h-full w-full relative flex " ref="target" :style="targetStyle">
        <div class="h-full w-1/2 relative">
            <NuxtImg src="/images/login/left-2.png" :style="left0" />
            <NuxtImg src="/images/login/left-3.png" :style="left1" />
            <NuxtImg src="/images/login/left-1.png" :style="left2" />
            <NuxtImg src="/images/login/left-4.png" :style="left3" />
            <NuxtImg src="/images/login/right-2.png" :style="left4"/>
        </div>
        <div class="h-full w-1/2 relative">
            <NuxtImg src="/images/login/right-1.png" :style="envelopStyle" />
            <NuxtImg src="/images/login/right-5.png" :style="clockStyle" />
            <div :style="imageStyle">
                <NuxtImg src="/images/login/right-2.png" />
                <NuxtImg src="/images/login/right-3.png" class="flex-1 h-auto w-[53px]" />
            </div>
            <NuxtImg src="/images/login/right-4.png" :style="envelopeStyle2" />
        </div>
    </div>
</template>