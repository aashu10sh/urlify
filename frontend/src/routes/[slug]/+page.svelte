<script lang="ts">
    import type { PageData } from '../$types';

    export let data: PageData;

    if(data.link){
       window.location.href = data.link.originalUrl!; 
    }
</script>


<h1 class="text-xl">
    No such URL {data.slug}
</h1>