<?php

namespace App\DataFixtures;

use App\Entity\Skill;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SkillFixtures extends Fixture
{
    const Skills = [
        [
            'name' => 'PHP',
            'categorie' => 'backEnd',
            'image' => "https://iconarchive.com/download/i105644/papirus-team/papirus-apps/github-bartzaalberg-php-tester.ico",
            'description' => "Langage back php",
            'maitrise' => "4"
        ],
        [
            'name' => 'Symfony',
            'categorie' => 'backEnd',
            'image' => 'https://symfony.com/logos/symfony_black_03.png',
            'description' => "Framework Symfony",
            'maitrise' => "4"
        ],
        [
            'name' => 'Wordpress',
            'categorie' => 'backEnd',
            'image' => 'https://cdn-icons-png.flaticon.com/512/174/174881.png',
            'description' => "Framework Wordpress",
            'maitrise' => "4"
        ],
        [
            'name' => 'MySQL',
            'categorie' => 'backEnd',
            'image' => 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png',
            'description' => "Base de données MySql",
            'maitrise' => "4"
        ],
        [
            'name' => 'GraphQL',
            'categorie' => 'backEnd',
            'image' => 'https://cdn.icon-icons.com/icons2/3053/PNG/512/graphql_playground_macos_bigsur_icon_190105.png',
            'description' => "Framework GraphQL",
            'maitrise' => "4"
        ],

        [
            'name' => 'HTML',
            'categorie' => 'frontEnd',
            'image' => 'https://cdn.icon-icons.com/icons2/2415/PNG/512/html_original_wordmark_logo_icon_146478.png',
            'description' => "Langage front HTML5",
            'maitrise' => "4"
        ],
        [
            'name' => 'CSS',
            'categorie' => 'frontEnd',
            'image' => 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png',
            'description' => "Langage front CSS3",
            'maitrise' => "4"
        ],
        [
            'name' => 'Javascript',
            'categorie' => 'frontEnd',
            'image' => 'https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png',
            'description' => "Langage front Javascript",
            'maitrise' => "4"
        ],
        [
            'name' => 'JQuery',
            'categorie' => 'frontEnd',
            'image' => 'https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_original_wordmark_logo_icon_146447.png',
            'description' => "Langage front JQuery",
            'maitrise' => "4"
        ],
        [
            'name' => 'React',
            'categorie' => 'frontEnd',
            'image' => 'https://cdn.icon-icons.com/icons2/2108/PNG/512/react_icon_130845.png',
            'description' => "Langage front React",
            'maitrise' => "4"
        ],
        [
            'name' => 'GatsbyJs',
            'categorie' => 'frontEnd',
            'image' => 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_gatsby_icon_130583.png',
            'description' => "Langage front GatsbyJs",
            'maitrise' => "4"
        ],
        [
            'name' => 'Bootstrap',
            'categorie' => 'frontEnd',
            'image' => 'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png',
            'description' => "Framework front Bootstrap",
            'maitrise' => "4"
        ],

        [
            'name' => 'Git',
            'categorie' => 'devOps',
            'image' => 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png',
            'description' => "Git",
            'maitrise' => "4"
        ],
        [
            'name' => 'GitHub',
            'categorie' => 'devOps',
            'image' => 'https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png',
            'description' => "GitHub",
            'maitrise' => "4"
        ],
        [
            'name' => 'GitLab',
            'categorie' => 'devOps',
            'image' => 'https://cdn.icon-icons.com/icons2/2108/PNG/512/gitlab_icon_130930.png',
            'description' => "GitLab",
            'maitrise' => "4"
        ],
        [
            'name' => 'CapRover',
            'categorie' => 'devOps',
            'image' => 'https://caprover.com/img/logo.png',
            'description' => "CapRover",
            'maitrise' => "4"
        ],

        [
            "name" => 'Ubuntu',
            "categorie" => 'Autres',
            'image' => 'https://cdn.icon-icons.com/icons2/70/PNG/512/ubuntu_14143.png',
            'description' => "Système d'exploitation Linux",
            'maitrise' => "4"
        ],
        [
            'name' => 'Windows',
            'categorie' => 'Autres',
            'image' => 'https://cdn.icon-icons.com/icons2/5/PNG/256/windows_284.png',
            'description' => "Système d'exploitation Windows",
            'maitrise' => "4"
        ],
        [
            'name' => 'Visual Studio Code',
            'categorie' => 'Autres',
            'image' => 'https://cdn.icon-icons.com/icons2/3053/PNG/512/microsoft_visual_studio_code_alt_macos_bigsur_icon_189954.png',
            'description' => "IDE de développement",
            'maitrise' => "4"
        ],
        [
            'name' => 'SketchUp',
            'categorie' => 'Autres',
            'image' => 'https://cdn.icon-icons.com/icons2/195/PNG/256/Google_Sketchup_23504.png',
            'description' => "IDE de modélisation",
            'maitrise' => "4"
        ],
        [
            'name' => '3D',
            'categorie' => 'Autres',
            'image' => 'https://cdn.icon-icons.com/icons2/1724/PNG/512/4023887-3dprinting-print-printing_112870.png',
            'description' => "IDE de modélisation 3D",
            'maitrise' => "4"
        ],
        [
            'name' => 'Électronique',
            'categorie' => 'Autres',
            'image' => 'https://cdn.icon-icons.com/icons2/1738/PNG/512/iconfinder-technologymachineelectronicdevice40-4026420_113344.png',
            'description' => "Électronique",
            'maitrise' => "4"
        ],
        [
            'name' => 'Méthode Agile / Scrum',
            'categorie' => 'Autres',
            'image' => 'https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_scrum_icon_158716.png',
            'description' => "Méthode Agile / Scrum",
            'maitrise' => "4"
        ],
        [
            'name' => 'Ésprit d\'équipe',
            'categorie' => 'Soft Skill',
            'image' => 'https://cdn.icon-icons.com/icons2/2485/PNG/512/teamwork_icon_150041.png',
            'description' => "Ésprit d'équipe",
            'maitrise' => "4"
        ],
        [
            'name' => 'Autonome',
            'categorie' => 'Soft Skill',
            'image' => 'https://cdn.icon-icons.com/icons2/2331/PNG/512/working_work_office_business_man_alone_home_icon_142242.png',
            'description' => 'Autonome',
            'maitrise' => "4"
        ],
        [
            'name' => "Curieux",
            'categorie' => 'Soft Skill',
            'image' => 'https://e7.pngegg.com/pngimages/1017/682/png-clipart-emoji-computer-icons-curious-text-smiley.png',
            'description' => "Curieux",
            'maitrise' => "4"
        ],
        [
            'name' => "Ponctuel",
            'categorie' => 'Soft Skill',
            'image' => 'https://thumbs.dreamstime.com/b/ic%C3%B4ne-solide-noire-pour-ponctuel-opportun-et-p%C3%A9riodique-le-programme-logo-symbole-147256191.jpg',
            'description' => "Ponctuel",
            'maitrise' => "4"
        ],
        [
            'name' => "Patient",
            'categorie' => 'Soft Skill',
            'image' => 'https://icon-library.com/images/patience-icon/patience-icon-20.jpg',
            'description' => "Patient",
            'maitrise' => "4"

        ]
    ];



    public function load(ObjectManager $manager): void
    {
        foreach (self::Skills as $skill) {

            $skillFixtures = new Skill;
            $skillFixtures->setName($skill['name']);
            $skillFixtures->setCategorie($skill['categorie']);
            $skillFixtures->setImageName($skill['image']);
            $skillFixtures->setDescription($skill['description']);
            $skillFixtures->setMaitrise($skill['maitrise']);
            $manager->persist($skillFixtures);
        }

        $manager->flush();
    }
}
