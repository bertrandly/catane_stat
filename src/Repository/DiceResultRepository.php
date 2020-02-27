<?php

namespace App\Repository;

use App\Entity\DiceResult;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method DiceResult|null find($id, $lockMode = null, $lockVersion = null)
 * @method DiceResult|null findOneBy(array $criteria, array $orderBy = null)
 * @method DiceResult[]    findAll()
 * @method DiceResult[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DiceResultRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DiceResult::class);
    }

}
