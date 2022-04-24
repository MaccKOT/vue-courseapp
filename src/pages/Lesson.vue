<script setup>
import courses from '../courses';
import { useRoute } from 'vue-router';
const route = useRoute();
const { courseId, lessonId } = route.params;
const course = courses.find((course) => course.id === parseInt(courseId));
const lesson = course.lessons.find(
  (lesson) => lesson.id === parseInt(lessonId)
);
</script>
