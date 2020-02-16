<template>
  <div class="pa-3">
    <h3>课程列表</h3>
    <!-- <div>{{courses}}</div> -->
    <v-row>
      <v-col  v-for="item in courses" :key="item._id" md="3">
        <v-card :to="`/courses/${item._id}`" class="mx-auto" max-width="345" min-width="250">
          <v-img
            :src="item.cover"
            height="200px"
          ></v-img><!-- item.cover-->

          <v-card-title>
            {{item.name}}
          </v-card-title>

          <v-card-subtitle>
            {{item.createdAt.slice(0,10)}}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text>Share</v-btn>

            <v-btn color="purple" text>
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <!-- <v-btn icon>
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn> -->
          </v-card-actions>

          <v-expand-transition>
            <div>
              <v-divider></v-divider>

              <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus non impedit obcaecati labore perferendis aperiam?
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  async asyncData({$axios}) {
    const data = await $axios.$get('courses') //$get$ ==> course = res.data

    return {//return 会合并到vue data上
      courses: data.data
    }
  }
}
</script>
<style scoped></style>
