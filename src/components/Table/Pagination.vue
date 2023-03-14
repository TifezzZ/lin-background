<template>
  <!-- 分页组件 -->
  <el-pagination
    :current-page="pageable.page"
    :page-size="pageable.size"
    :page-sizes="[10, 20, 50, 100]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="pageable.totalElements"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script setup lang="ts" name="pagination">
interface Pageable {
  page: number
  size: number
  totalElements: number
}

interface PaginationProps {
  pageable: Pageable
  handleSizeChange: (size: number) => void
  handleCurrentChange: (currentPage: number) => void
}

defineProps<PaginationProps>()
</script>
