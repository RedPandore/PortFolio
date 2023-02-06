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
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:make-user',
    description: 'This is a command to create order status',
)]
class CreateUserCommand extends Command
{
    public function __construct(private EntityManagerInterface $em, private UserPasswordHasherInterface $userPasswordHasherInterface)
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
       
        $password = $io->ask('Mot de passe');

        $user = new User();

        $user->setEmail('tennessee.houry@deviteasy.fr');
        $user->setPassword($this->userPasswordHasherInterface->hashPassword($user, $password));
        $user->setFirstName('Tennessee');
        $user->setLastName('Houry');
        $user->setPhone('0761793355');
        $user->setAddress('667 rue saint michel');
        $user->setCity('Loury');
        $user->setZipCode('45470');
        $user->setCountry('France');
        $user->setJob('Développeur Web');
        $user->setRoles(['ROLE_ADMIN']);
        $user->setImageName('default.png');
        $user->setGithub('https://github.com/RedPandore/');
        $user->setLinkedin('https://www.linkedin.com/in/tennessee-houry-5b1b3b1b9/');
        $user->setDiscord('Tennessee#0001');
        $user->setDescription('Je suis un développeur web Freelance, je suis passionné par le développement web et le développement mobile.');

        $this->em->persist($user);
        $this->em->flush();
        $io->success('Vous avez creer un utilisateur avec succes');



      

        return Command::SUCCESS;
    }
}
