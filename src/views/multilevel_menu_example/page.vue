<template>
    <div>
        <page-main>
            <el-button type="primary" @click="savePageToPdf">保存为pdf</el-button>
            多级导航1
            <div class="block" />
        </page-main>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import htmlToPdf from '@/util/htmlToPdf'

onMounted(() => {
    console.log(htmlToPdf)
})

function savePageToPdf() {
    htmlToPdf.getPdf({
        title: '123',
        dom: document.querySelector('.main-container .main')
    })
}
</script>

<style lang="scss" scoped>
.block{
    width: 200px;
    height: 1600px;
    border: 1px solid;
    background-color: #ff6700;
}
</style>
