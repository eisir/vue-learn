<template>
  <div class="panel panel-default">
    <div class="panel-heading">Forms</div>
    <div class="panel-body">
    	<div class="form">
    		<h4>input</h4>
        <input type="text" v-model="message" placeholder="edit me">
        <div class="text">Enter: {{ message }}</div>
        <h4>Multiline message is:</h4>
        <p style="white-space:pre">{{textArea}}</p>
        <div>
          <textarea v-model="textArea" placeholder="add multiple lines"></textarea>
        </div>
        <div>
          <input type="checkbox" id="checkbox" value="ming" v-model="isChecked">
          <label for="checkbox">{{ isChecked }}</label> 
        </div>
        <div>
          <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
          <label for="jack">Jack</label>
          <input type="checkbox" id="john" value="John" v-model="checkedNames">
          <label for="john">John</label>
          <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
          <label for="mike">Mike</label>
          <br>
          <span>Checked names: {{ checkedNames }}</span>
          <br>
          <input type="radio" id="one" value="One" v-model="picked">
          <label for="one">One</label>
          <br>
          <input type="radio" id="two" value="Two" v-model="picked">
          <label for="two">Two</label>
          <div>
            <span>Picked: {{ picked }}</span>
          </div>
        </div>
        <h3>
          Select
        </h3>
        <p>
          <select v-model="selected">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span>Selected: {{ selected }}</span>
          <br />
          <br />
          <select v-model="selected2" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span>Selected: {{ selected2 }}</span>
          <br />
          <br />
          <select v-model="dySelect.selected">
            <option v-for="option in dySelect.options" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
          <br>
        </p>
    	</div>
    </div>
  </div>
</template>

<script>
	export default {
		data(){
			return {
        message: "",
        textArea:"",
        isChecked: true,
        checkedNames:["Jack"],
        picked: "One",
        selected:"B",
        selected2:[],
        dySelect:{
          selected:'B',
          options:[
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
          ]
        }

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
