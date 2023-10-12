<template>
  <div>
    <div class="operation-btns">
      <el-button @click="() => (openToolTip = true)"> Add ToolTip </el-button>

      <el-button @click="() => (openToolTip = false)">
        Close ToolTip
      </el-button>

      <el-button @click="addTenRows"> Add 10 Rows </el-button>
    </div>

    <el-table :data="tableData" style="width: 100%; margin-top: 20px">
      <el-table-column prop="date" label="日期" width="180">
        <template #default="{ row }">
          <el-tooltip
            effect="dark"
            :disabled="!openToolTip"
            :content="row.date"
            placement="top"
          >
            <span>{{ row.date }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
        <template #default="{ row }">
          <el-tooltip
            effect="dark"
            :disabled="!openToolTip"
            :content="row.name"
            placement="top"
          >
            <span>{{ row.name }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址">
        <template #default="{ row }">
          <el-tooltip
            effect="dark"
            :disabled="!openToolTip"
            :content="row.address"
            placement="top"
          >
            <span>{{ row.address }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="date1" label="日期" width="180">
        <template #default="{ row }">
          <el-tooltip
            effect="dark"
            :disabled="!openToolTip"
            :content="row.date1"
            placement="top"
          >
            <span>{{ row.date1 }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="name1" label="姓名" width="180">
        <template #default="{ row }">
          <el-tooltip
            effect="dark"
            :disabled="!openToolTip"
            :content="row.name1"
            placement="top"
          >
            <span>{{ row.name1 }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="address1" label="地址">
        <template #default="{ row }">
          <el-tooltip
            effect="dark"
            :disabled="!openToolTip"
            :content="row.address1"
            placement="top"
          >
            <span>{{ row.address1 }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="date2" label="日期" width="180">
        <template #default="{ row }">
          <el-tooltip
            effect="dark"
            :disabled="!openToolTip"
            :content="row.date2"
            placement="top"
          >
            <span>{{ row.date2 }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="name2" label="姓名" width="180">
        <template #default="{ row }">
          <el-tooltip
            effect="dark"
            :disabled="!openToolTip"
            :content="row.name2"
            placement="top"
          >
            <span>{{ row.name2 }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="address2" label="地址">
        <template #default="{ row }">
          <el-tooltip
            effect="dark"
            :disabled="!openToolTip"
            :content="row.address2"
            placement="top"
          >
            <span>{{ row.address2 }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          date1: '2016-05-02',
          name1: '王小虎',
          address1: '上海市普陀区金沙江路 1518 弄',
          date2: '2016-05-02',
          name2: '王小虎',
          address2: '上海市普陀区金沙江路 1518 弄',
        },
      ],
      openToolTip: false,
    }
  },
  methods: {
    addTenRows() {
      const tenRows = new Array(10).fill({
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        date1: '2016-05-02',
        name1: '王小虎',
        address1: '上海市普陀区金沙江路 1518 弄',
        date2: '2016-05-02',
        name2: '王小虎',
        address2: '上海市普陀区金沙江路 1518 弄',
      })
      this.tableData = this.tableData.concat(tenRows)
    },
  },
}
</script>

<style scoped>
.operation-btns {
  position: fixed;
  top: 20;
  left: 10;
  display: flex;
  z-index: 1000;
}
</style>
