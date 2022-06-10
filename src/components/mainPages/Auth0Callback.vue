<script>
import axios from "axios";
export default {
 name: "Auth0Process",
 methods: {
  async getAuthApiData() {
   //  const AuthApiData = await axios.get("https://dev-csmlbd3j.us.auth0.com/authorize?response_type=token&client_id=Ii26ojtfciDFZoLIf4V6oDDlRpGk5ciP&connection=null&redirect_uri=https://3bycwb.csb.app/callback&state=STATE&access_type=offline");
   //  console.log(AuthApiData);
   this.$router.replace("/moviemain/");
   this.$store.commit("setUserIsAuthorized", true);
   //  localStorage.setItem(AuthApiData);
  }
 },
 mounted() {
  this.getAuthApiData();
 }
};
</script>