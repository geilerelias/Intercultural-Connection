<template>
    <div>
        <perfect-scrollbar>
            <div v-for="item in 20" :key="item.id">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Expedita harum ipsum nostrum
                    recusandae sed eveniet repellat. Reiciendis, eligendi?
                    Ratione sunt assumenda eveniet consequatur perspiciatis nam
                    repudiandae saepe tenetur nostrum doloremque? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Eos cumque
                    placeat quos sit odit recusandae nobis soluta impedit
                    quaerat vero doloribus illo maxime, sint repellendus, sequi
                    blanditiis pariatur accusantium minima! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Omnis maxime earum,
                    reprehenderit, dolores beatae cum molestias dolorum alias
                    deleniti officia incidunt vero eligendi delectus hic?
                    Officiis beatae illum eum voluptatem. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Explicabo aperiam quis
                    architecto delectus cupiditate rem ullam nulla magni id
                    molestias, aut veritatis maiores ipsa minima! Excepturi et
                    explicabo aperiam vero!
                </p>
            </div>
        </perfect-scrollbar>
    </div>
</template>
<script>
import { PerfectScrollbar } from "vue2-perfect-scrollbar";
export default {
    components: {
        PerfectScrollbar
    }
};
</script>
