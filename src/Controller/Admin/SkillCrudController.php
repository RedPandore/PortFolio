<?php

namespace App\Controller\Admin;

use App\Entity\Skill;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class SkillCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Skill::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name'),
            TextField::new('description'),
            ChoiceField::new('categorie')->setChoices(['backEnd' => 'backEnd', 'frontEnd' => 'frontEnd', 'devOps' => 'devOps', 'Soft Skill' => 'Soft Skill', 'Autres' => 'Autres', 'Profil' => 'Profil']),
            ImageField::new('imageName')
            ->setBasePath('/uploads/images/')
            ->hideOnForm(),
            TextareaField::new(propertyName: 'imageFile', label:'Image Project')
            ->setFormType(VichImageType::class)
            ->onlyOnForms(),
            NumberField::new('maitrise'),
        ];
    }
    
}
