<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\Project;
use DateTimeImmutable;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ProjectFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for($i = 0; $i < 20; $i++){
            $project = new Project();
            $project->setName('Project '.$i);
            $project->setLink('Link '.$i);

            $project->setDescription('Description '.$i);
            $project->setLanguage(['php', 'js']);
            $project->setImageName('Image '.$i);
            $manager->persist($project);
        }


        $manager->flush();
    }
}
