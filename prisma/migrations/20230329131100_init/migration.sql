-- CreateTable
CREATE TABLE `expenses` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `expense_type_id` INTEGER UNSIGNED NOT NULL,
    `payment_methods_id` INTEGER UNSIGNED NOT NULL,
    `expense_local_id` INTEGER UNSIGNED NULL,
    `description` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `number_of_installments` INTEGER NOT NULL DEFAULT 1,
    `installments_first_due_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observations` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `expenses_expense_type_id_idx`(`expense_type_id`),
    INDEX `expenses_payment_methods_id_idx`(`payment_methods_id`),
    INDEX `expenses_expense_local_id_idx`(`expense_local_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `expense_types` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `expense_locals` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `installments` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `expense_id` INTEGER UNSIGNED NOT NULL,
    `number` INTEGER NOT NULL,
    `due_date` DATE NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `paid` BOOLEAN NOT NULL DEFAULT false,
    `paid_date` DATE NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    INDEX `installments_expense_id_idx`(`expense_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_methods` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `expenses` ADD CONSTRAINT `expenses_expense_type_id_fkey` FOREIGN KEY (`expense_type_id`) REFERENCES `expense_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `expenses` ADD CONSTRAINT `expenses_payment_methods_id_fkey` FOREIGN KEY (`payment_methods_id`) REFERENCES `payment_methods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `expenses` ADD CONSTRAINT `expenses_expense_local_id_fkey` FOREIGN KEY (`expense_local_id`) REFERENCES `expense_locals`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `installments` ADD CONSTRAINT `installments_expense_id_fkey` FOREIGN KEY (`expense_id`) REFERENCES `expenses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
