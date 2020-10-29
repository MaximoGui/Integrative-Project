CREATE TABLE `categoria` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar NOT NULL,
	`disponivel` BOOLEAN NOT NULL,
	`freteGratis` BOOLEAN NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `produto` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`linguagem` varchar(255) NOT NULL,
	`preco` DECIMAL(10,2) NOT NULL,
	`cor` varchar(255) NOT NULL,
	`estoque` INT(255) NOT NULL,
	`categoria_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `usuario` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `produto` ADD CONSTRAINT `produto_fk0` FOREIGN KEY (`categoria_id`) REFERENCES `categoria`(`id`);

