<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'app:make-user',
    description: 'This is a command to create order status',
)]
class CreateUserCommand extends Command
{
    public function __construct(private EntityManagerInterface $em)
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        
        // ask for the user name
        $name = $io->ask('Email');
        $password = $io->ask('Mot de passe');
        $firstName = $io->ask('Prenom');
        $lastName = $io->ask('Nom');
        $phone = $io->ask('Telephone');
        $address = $io->ask('Adresse');
        $city = $io->ask('Ville');
        $zipCode = $io->ask('Code postal');
        $country = $io->ask('Pays');
        $job = $io->ask('Profession');


        $user = new User();
        $user->setEmail($name);
        $user->setPassword($password);
        $user->setFirstName($firstName);
        $user->setLastName($lastName);
        $user->setPhone($phone);
        $user->setAddress($address);
        $user->setCity($city);
        $user->setZipCode($zipCode);
        $user->setCountry($country);
        $user->setJob($job);
        $user->setRoles(['ROLE_ADMIN']);

        $this->em->persist($user);
        $this->em->flush();
        $io->success('Vous avez creer un utilisateur avec succes');



      

        return Command::SUCCESS;
    }
}
