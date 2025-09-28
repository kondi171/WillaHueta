<template>
  <section class="conference-rooms" v-scroll-reveal>
    <div class="table-wrapper">
      <table class="rooms-table">
        <thead>
          <tr>
            <th rowspan="2">Sala</th>
            <th colspan="3">Ułożenie</th>
          </tr>
          <tr>
            <th>
              <font-awesome-icon :icon="['fas', 'theater-masks']" /> Teatr
            </th>
            <th><font-awesome-icon :icon="['fas', 'utensils']" /> Bankiet</th>
            <th>
              <font-awesome-icon :icon="['fas', 'chalkboard-teacher']" /> Szkoła
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="room in rooms" :key="room.name">
            <td data-label="Sala" class="thead">{{ room.name }}</td>
            <td data-label="Teatr">{{ room.theater }} osób</td>
            <td data-label="Bankiet">{{ room.banquet }} osób</td>
            <td data-label="Szkoła">{{ room.classroom }} osób</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConferenceRooms",
  data() {
    return {
      rooms: [
        {
          name: "Sala Kryształowa",
          theater: 200,
          banquet: 120,
          classroom: 120,
        },
        { name: "Sala Perłowa", theater: 100, banquet: 70, classroom: 70 },
        { name: "Sala Diamentowa", theater: 40, banquet: 30, classroom: 30 },
        { name: "Sala Brylantowa", theater: 10, banquet: 10, classroom: 10 },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/placeholders.scss" as *;

.conference-rooms {
  padding: 2vmin;

  .table-wrapper {
    overflow-x: auto;
  }

  .rooms-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    min-width: 600px;

    th,
    td {
      padding: 2vmin;
      text-align: center;
      border: 2px solid $bgColor;
    }

    th {
      background-color: $primaryColor;
      color: $bgColor;
      font-weight: bold;
      font-size: 4vmin;

      svg {
        margin-right: 1vmin;
      }
    }

    td {
      font-size: 2vmin;
      color: $blackColor;
    }
  }

  @media (max-width: $mobileBreakpoint) {
    .rooms-table {
      border: 0;
      min-width: 0;
      .thead {
        border-bottom: 2px solid $primaryColor;
      }
      thead {
        display: none;
      }

      tbody {
        display: flex;
        flex-direction: column;
        gap: 3vmin;
      }

      tr {
        display: flex;
        flex-direction: column;
        border: 1px solid $bgColor;
        border-radius: 8px;
        padding: 2vmin;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      td {
        display: flex;
        justify-content: space-between;
        text-align: left;
        font-size: 4vmin;
        padding: 1vmin 0;
        border: none;

        &:before {
          content: attr(data-label);
          font-weight: bold;
          color: $primaryColor;
        }
      }

      td:first-child {
        font-size: 5vmin;
        font-weight: bold;
        color: $primaryColor;
        margin-bottom: 1vmin;

        &:before {
          content: "";
        }
      }
    }
  }
}
</style>
