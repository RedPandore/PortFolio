<?php

namespace App\Controller\Admin;

use App\Entity\User;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\TextEditorType;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new(propertyName: 'lastname', label: 'Nom')
                ->setTextAlign('center'),
            TextField::new(propertyName: 'firstname', label: 'Prénom')
                ->setTextAlign('center'),
            EmailField::new(propertyName: 'email', label: 'Email')
                ->setTextAlign('center'),
            ChoiceField::new(propertyName: 'roles', label: 'Roles')
                ->setTextAlign('center')
                ->setChoices(['ROLE_ADMIN' => 'ROLE_ADMIN', 'ROLE_USER' => 'ROLE_USER'])
                ->allowMultipleChoices()
                ->onlyOnForms(),
            TextField::new(propertyName: 'password', label: 'Mot de pass')
                ->setTextAlign('center')
                ->onlyOnForms()
                ->setFormType(PasswordType::class),
            TextField::new(propertyName: 'github', label: 'Github')
                ->setTextAlign('center'),
            TextField::new(propertyName: 'linkedin', label: 'Linkedin')
                ->setTextAlign('center'),
            TextField::new(propertyName: 'discord', label: 'Discord')
                ->setTextAlign('center'),
            TextField::new(propertyName: 'job', label: 'Emploi')
                ->setTextAlign('center'),
            TextField::new(propertyName: 'phone', label: 'Numéro de téléphone')
                ->setTextAlign('center'),
            TextField::new(propertyName: 'address', label: 'Addresse')
                ->setTextAlign('center'),
            TextField::new(propertyName: 'city', label: 'Ville')
                ->setTextAlign('center'),
            TextField::new(propertyName: 'zipcode', label: 'Code Postal')
                ->setTextAlign('center'),
            TextField::new(propertyName: 'country', label: 'Pays')
                ->setTextAlign('center'),
            TextEditorField::new(propertyName: 'description', label: 'Description')
                ->setTextAlign('center')
                ->setFormType(TextEditorType::class)
                ->onlyOnForms(),

            ImageField::new('imageName')
                ->setBasePath('/uploads/images/')
                ->hideOnForm(),
            TextareaField::new(propertyName: 'imageFile', label: 'Image de profil')
                ->setFormType(VichImageType::class)
                ->onlyOnForms(),

        ];
    }
}
