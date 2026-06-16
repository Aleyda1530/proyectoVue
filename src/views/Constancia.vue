<template>
    <div>
    <h1>PRUEBA VUE</h1>
  <div class="container" v-if="student">

    <h1>CONSTANCIA DE MATRÍCULA DE LABORATORIO</h1>

    <h3>Escuela Profesional de Ingeniería de Sistemas EPIS</h3>

    <p><strong>Emitido el:</strong> {{ fecha }}</p>

    <hr>

        <div class="seccion">
        DATOS DEL ALUMNO
        </div>

        <p><strong>CUI:</strong> {{ student.cui }}</p>

        <p><strong>Nombre:</strong> {{ student.full_name }}</p>

        <p><strong>Email:</strong> {{ student.email }}</p>

        <div class="seccion">
        ASIGNATURAS MATRICULADAS
        </div>
    <table border="1">
      <thead>
        <tr>
          <th>N°</th>
          <th>Código</th>
          <th>Curso</th>
          <th>Año</th>
          <th>Grupo</th>
          <th>Laboratorio</th>
          <th>Docente</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(curso,index) in enrollments"
          :key="curso.id"
        >
          <td>{{ index + 1 }}</td>

          <td>{{ curso.workload.course.code }}</td>

          <td>
            {{ curso.workload.course.name }}
            ({{ curso.workload.course.acronym }})
          </td>

          <td>
            {{ curso.workload.course.year_display }}
          </td>

          <td>
            {{ curso.workload.group }}
          </td>

          <td>
            {{ curso.workload.laboratory }}
          </td>

          <td>
            {{ curso.workload.teacher.full_name }}
          </td>
        </tr>
      </tbody>
    </table>

    <h3>
      Total de cursos matriculados:
      {{ enrollments.length }}
    </h3>

    <footer class="footer">
    Aleyda Luz Quispe Hacha
    </footer>

    </div>
     </div>
</template>

<style>
body {
  background-color: #f4f4f4;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  max-width: 900px;
  margin: 30px auto;
  background: white;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #1d4f8c;
  font-size: 32px;
}

h3 {
  text-align: center;
  color: #444;
}

.fecha {
  text-align: center;
  color: #666;
}

.seccion {
  background: #e9e9e9;
  border-left: 5px solid #1d4f8c;
  padding: 10px;
  font-weight: bold;
  margin-top: 25px;
}

.datos {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 10px;
  margin-top: 15px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th {
  background: #f0f0f0;
}

th, td {
  border: 1px solid #d0d0d0;
  padding: 10px;
  text-align: left;
}

.total {
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
}
.footer {
  margin-top: 30px;
  text-align: center;
  color: gray;
  font-size: 14px;
}

</style>

<script>
import axios from "axios"

export default {

  data() {
    return {
      enrollments: [],
      student: null,
      fecha: ""
    }
  },

  async mounted() {

    const cui = this.$route.params.cui

    console.log("Entró al mounted")

this.student = {
  cui: 20250100,
  full_name: "PRUEBA",
  email: "prueba@unsa.edu.pe"
}

this.enrollments = [
  {
    id: 1,
    workload: {
      course: {
        code: "2502117",
        name: "DESARROLLO DE APLICACIONES WEB",
        acronym: "DAW",
        year_display: "2do año"
      },
      group: "A",
      laboratory: "lab01",
      teacher: {
        full_name: "DOCENTE PRUEBA"
      }
    }
  }
]

    this.enrollments = response.data.results

    if (this.enrollments.length > 0) {

      this.student =
        this.enrollments[0].student

      this.fecha =
        new Date(
          this.enrollments[0].created
        ).toLocaleDateString('es-PE')
    }
  }
}
</script>
