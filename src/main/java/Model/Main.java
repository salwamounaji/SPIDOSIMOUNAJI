package Model;
	import org.springframework.boot.SpringApplication;
	import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
	import org.springframework.boot.autoconfigure.SpringBootApplication;
	import org.springframework.boot.autoconfigure.domain.EntityScan;
	import org.springframework.context.annotation.ComponentScan;
	import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

	@SpringBootApplication
	@EntityScan("Model")
	@EnableJpaRepositories(basePackages = {"DAO"})
	@Configuration
	@Import(SwaggerClasse.class)
	@EnableAutoConfiguration
	@ComponentScan({"Controlleur","Business"})
	public class Main{

		public static void main(String[] args) {
			SpringApplication.run(Main.class, args);
		}
 

	}



