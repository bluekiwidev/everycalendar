<script>
  import { page } from '$app/state';
  const days = [
		'1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'potato',
    'cheese',
    'ketchup',
    'mustard',
    'mayonnaise',
    'coke',
    'pepsi',
    'sprite',
    'fanta',

	];
</script>

<!-- remember page.params.month is the month in the url -->
<div class="topnav">
	<h1>The everyone calendar</h1>
</div>

<h2>{page.params.month}</h2>

<div class="months">
	{#each days as day, index}
		<a href={"/" + page.params.month + "/" + day.toLocaleLowerCase()} class="month">
			<h2 class="month-text">{day}</h2>
			<div class="month-stats">
				<i class="fa-solid fa-circle-dot"></i>
				<h6>0 events dedicated</h6>
			</div>
		</a>
	{/each}
</div>